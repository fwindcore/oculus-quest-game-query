import json
import os.path
JSON_FILE_PATH="../public/oculus-quest-store.json"
DETAIL_PATH="../public/detail"

all_data = json.load(open(JSON_FILE_PATH))

all_items = all_data['data']['node']['all_items']['edges']
for item in all_items:
    node = item['node']
    display_name = node['display_name']
    id = node['id']
    detail_info_path = os.path.join(DETAIL_PATH,id,'appinfo.json')
    print('fix data info:%s'%(display_name))
    if os.path.exists(detail_info_path):
        detail_info = json.load(open(detail_info_path))['data']['node']
    else:
        detail_info = {
            'quality_rating_aggregate':0,
        }
    node['quality_rating_aggregate'] = detail_info['quality_rating_aggregate']
    node['supported_in_app_languages'] = detail_info['supported_in_app_languages']
    node['genre_names'] = detail_info['genre_names']
    node['rating_count'] = sum([x['count'] for x in detail_info['quality_rating_histogram_aggregate_all']])

with open(JSON_FILE_PATH,'w') as json_file:
    json.dump(all_data,json_file,ensure_ascii=False)

print('ok')
    