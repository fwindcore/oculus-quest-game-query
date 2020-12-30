import requests
import os
import json
import concurrent.futures

JSON_FILE_PATH="../public/oculus-quest-store.json"
JSON_SLIM_FILE_PATH="../public/oculus-quest-store-slim.json"

all_data = json.load(open(JSON_FILE_PATH))
all_items = all_data['data']['node']['all_items']

def json_slim():
    item_edges = []
    for item in all_items['edges']:
        node = item['node']
        for key in ('cover_landscape_image','cover_portrait_image','cover_square_image','screenshots'):
            del node[key]
        item_edges.append(node)
    result = {'count':all_items['count'],'edges':item_edges}
    with open(JSON_SLIM_FILE_PATH,'w') as json_file:
        json.dump(result,json_file,indent='\t',ensure_ascii=False)
    
if __name__ == '__main__':
    json_slim()
    print('ok')