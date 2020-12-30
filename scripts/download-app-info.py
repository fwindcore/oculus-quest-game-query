import requests
import os
import json
import concurrent.futures

ROOT_PATH='../public/detail'
JSON_FILE_PATH="../public/oculus-quest-store.json"
API_URL = 'https://graph.oculus.com/graphql?forced_locale=zh_CN'

class OculusStore:
    def __init__(self,item) -> None:
        super().__init__()
        self.item = item
        self.node = item['node']
        self.display_name = self.node['display_name']
        self.id = self.node['id']
    
    def download_file(self,url,des):
        if os.path.exists(des):
            return os.path.getsize(des)
        with requests.get(url, stream=True) as r:
            r.raise_for_status()
            with open(des, 'wb') as f:
                for chunk in r.iter_content(chunk_size=8192): 
                    f.write(chunk)
                return f.tell()
    
    def download_cover(self):
        dst_dir = os.path.join(ROOT_PATH,self.id,'cover')
        if not os.path.exists(dst_dir):
            os.makedirs(dst_dir)
        for type in ['landscape','square','portrait']:
            url = self.node['cover_%s_image'%(type)]['uri']
            dst_path = os.path.join(dst_dir,'%s.jpg'%(type))
            print('downloading cover [%s] %s'%(self.display_name,type))
            self.download_file(url,dst_path)

    def download_screenshots(self):
        dst_dir = os.path.join(ROOT_PATH,self.id,'screenshots')
        if not os.path.exists(dst_dir):
            os.makedirs(dst_dir)
        
        screenshots = self.node['screenshots']
        for i in range(len(screenshots)):
            url = screenshots[i]['uri']
            dst_path = os.path.join(dst_dir,'%s.jpg'%(i))
            print('downloading screenshot [%s] %s'%(self.display_name,i))
            self.download_file(url,dst_path)


    def download_detail(self):
        detail_app_info_dir = os.path.join(ROOT_PATH,self.id)
        if not os.path.exists(detail_app_info_dir):
            os.makedirs(detail_app_info_dir)
        print('downloading detail [%s]'%(self.display_name))
        des = os.path.join(detail_app_info_dir,'appinfo.json')
        formData={
            "access_token":"OC|1317831034909742|",
            "variables":'{"itemId":"%s","first":1,"last":null,"after":null,"before":null,"forward":true,"ordering":null,"ratingScores":null,"hmdType":"MONTEREY"}'%(self.id),
            "doc_id":"3289811384479975"
        } 
        doc = requests.post(API_URL,data=formData)
        with open(des,'w') as json_file:
            json.dump(doc.json(),json_file,ensure_ascii=False)
    
    def run(self):
        self.download_detail()
        self.download_cover()
        self.download_screenshots()

    


all_data = json.load(open(JSON_FILE_PATH))
all_items = all_data['data']['node']['all_items']['edges']
DOWNLOAD_THREAD_NUMBER = 10

def oculus_store_download(item):
    instance = OculusStore(item)
    instance.run()

if __name__ == '__main__':
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        future_to_url = {executor.submit(oculus_store_download, item): item for item in all_items}
        for future in concurrent.futures.as_completed(future_to_url):
            item = future_to_url[future]
            data = future.result()
            try:
                data = future.result()
            except Exception as exc:
                print('%s generated an exception: %s' % (item['node']['display_name'], exc))
            else:
                print('finish [%s]' % (item['node']['display_name']))
