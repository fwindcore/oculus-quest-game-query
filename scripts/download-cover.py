import json
import time
import os
import requests
import concurrent.futures

ROOT_PATH='../public/cover'
JSON_FILE_PATH="../public/oculus-quest-store.json"

all_data = json.load(open(JSON_FILE_PATH))

all_items = all_data['data']['node']['all_items']['edges']


DOWNLOAD_THREAD_NUMBER = 10

def download_file(url,des):
    if os.path.exists(des):
        return os.path.getsize(des)
    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        with open(des, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192): 
                f.write(chunk)
            return f.tell()

def download_cover(item):
    node = item['node']
    display_name = node['display_name']
    id = node['id']
    for type in ['landscape','square','portrait']:
        url = node['cover_%s_image'%(type)]['uri']
        
        dst_dir = os.path.join(ROOT_PATH,id)

        if not os.path.exists(dst_dir):
            os.makedirs(dst_dir)
        dst_path = os.path.join(dst_dir,'%s.jpg'%(type))
        print('downloading %s %s'%(display_name,type))
        download_file(url,dst_path)
    return


# threadPool = ThreadPoolExecutor(max_workers=10, thread_name_prefix="download_")
    
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
    # Start the load operations and mark each future with its URL
    future_to_url = {executor.submit(download_cover, item): item for item in all_items}
    for future in concurrent.futures.as_completed(future_to_url):
        item = future_to_url[future]
        try:
            data = future.result()
        except Exception as exc:
            print('%s generated an exception: %s' % (item['node']['display_name'], exc))
        else:
            print('finish [%s]' % (item['node']['display_name']))
