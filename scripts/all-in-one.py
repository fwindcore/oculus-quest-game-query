import requests
import json
import os
import concurrent.futures

JSON_FILE_PATH = "../public/oculus-quest-store.json"
JSON_SLIM_FILE_PATH = "../public/oculus-quest-store-slim.json"
ROOT_PATH = '../public/detail'
API_URL = 'https://graph.oculus.com/graphql?forced_locale=zh_CN'


DOWNLOAD_THREAD_NUMBER = 10

print('get doc')
doc = requests.post(API_URL, data={
    "access_token": "OC|1317831034909742|",
    'variables': '{"sectionId":"1888816384764129","sortOrder":null,"sectionItemCount":999,"sectionCursor":null,"hmdType":"MONTEREY"}',
    "doc_id": "4565044133567732"
})

all_data = doc.json()
all_items = all_data['data']['node']['all_items']['edges']


class OculusStore:
    def __init__(self, item) -> None:
        super().__init__()
        self.item = item
        self.node = self.item['node']
        self.display_name = self.node['display_name']
        self.id = self.node['id']

    def get_item(self):
        return self.item

    def download_file(self, url, des):
        if os.path.exists(des):
            return os.path.getsize(des)
        with requests.get(url, stream=True) as r:
            r.raise_for_status()
            with open(des, 'wb') as f:
                for chunk in r.iter_content(chunk_size=8192):
                    f.write(chunk)
                return f.tell()

    def download_cover(self):
        dst_dir = os.path.join(ROOT_PATH, self.id, 'cover')
        if not os.path.exists(dst_dir):
            os.makedirs(dst_dir)
        for type in ['landscape', 'square', 'portrait']:
            cover_info = self.node.get('cover_%s_image' % (type))
            if not cover_info:
                continue
            url = cover_info['uri']
            dst_path = os.path.join(dst_dir, '%s.jpg' % (type))
            print('downloading cover [%s] %s' % (self.display_name, type))
            self.download_file(url, dst_path)

    def download_screenshots(self):
        dst_dir = os.path.join(ROOT_PATH, self.id, 'screenshots')
        if not os.path.exists(dst_dir):
            os.makedirs(dst_dir)

        screenshots = self.node['screenshots']
        for i in range(len(screenshots)):
            url = screenshots[i]['uri']
            dst_path = os.path.join(dst_dir, '%s.jpg' % (i))
            print('downloading screenshot [%s] %s' % (self.display_name, i))
            self.download_file(url, dst_path)

    def __fix_app_info(self, detail_info):
        self.node['quality_rating_aggregate'] = detail_info['quality_rating_aggregate']
        self.node['supported_in_app_languages'] = detail_info['supported_in_app_languages']
        self.node['genre_names'] = detail_info['genre_names']
        self.node['rating_count'] = sum(
            [x['count'] for x in detail_info['quality_rating_histogram_aggregate_all']])

    def download_detail(self):
        detail_app_info_dir = os.path.join(ROOT_PATH, self.id)
        if not os.path.exists(detail_app_info_dir):
            os.makedirs(detail_app_info_dir)
        print('downloading detail [%s]' % (self.display_name))
        des = os.path.join(detail_app_info_dir, 'appinfo.json')
        formData = {
            "access_token": "OC|1317831034909742|",
            "variables": '{"itemId":"%s","first":1,"last":null,"after":null,"before":null,"forward":true,"ordering":null,"ratingScores":null,"hmdType":"MONTEREY"}' % (self.id),
            "doc_id": "3289811384479975"
        }
        doc = requests.post(API_URL, data=formData)
        result = doc.json()
        del result['errors']
        del result['data']['node']['iarc_cert']
        del result['data']['node']['screenshots']
        del result['data']['node']['hero']

        self.__fix_app_info(detail_info=result['data']['node'])
        with open(des, 'w') as json_file:
            json.dump(result, json_file, indent='\t', ensure_ascii=False)

    def run(self):
        self.download_detail()
        self.download_cover()
        self.download_screenshots()


def oculus_store_download(item):
    instance = OculusStore(item)
    instance.run()


def download_detail_info():
    with concurrent.futures.ThreadPoolExecutor(max_workers=DOWNLOAD_THREAD_NUMBER) as executor:
        future_to_url = {executor.submit(
            oculus_store_download, item): item for item in all_items}
        for future in concurrent.futures.as_completed(future_to_url):
            item = future_to_url[future]
            data = future.result()
            try:
                data = future.result()
            except Exception as exc:
                print('%s generated an exception: %s' %
                      (item['node']['display_name'], exc))
            else:
                print('finish [%s]' % (item['node']['display_name']))


def save_slim_store_info():
    item_edges = []
    for item in all_items:
        node = item['node']
        for key in ('cover_landscape_image', 'cover_portrait_image', 'cover_square_image', 'screenshots'):
            del node[key]
        item_edges.append(node)
    result = {'count': len(all_items), 'edges': item_edges}
    print('save slim store info')
    with open(JSON_SLIM_FILE_PATH, 'w') as json_file:
        json.dump(result, json_file, indent='\t', ensure_ascii=False)


if __name__ == '__main__':
    download_detail_info()
    save_slim_store_info()
