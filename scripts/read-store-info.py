import json
import time

JSON_FILE_PATH="../public/oculus-quest-store.json"
all_data = json.load(open(JSON_FILE_PATH))

all_items = all_data['data']['node']['all_items']['edges']

for item in all_items:
    node = item['node']
    display_name = node['display_name']
    current_offer = node['current_offer']
    price = current_offer['price']['formatted']
    promo_benefit = current_offer['promo_benefit']
    strikethrough_price = current_offer['strikethrough_price']
    end_time = current_offer['end_time']
    end_time_formatted = time.strftime('%Y-%m-%d %H:%M',time.localtime(end_time))
    
    if promo_benefit:
        print(display_name,price,promo_benefit,strikethrough_price['formatted'],end_time_formatted)