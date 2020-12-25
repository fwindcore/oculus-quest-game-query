import requests
import json

JSON_FILE_PATH="../public/usd-rate.json"

url = "https://api.it120.cc/gooking/forex/rate?fromCode=CNY&toCode=USD"
print('get rate')
doc = requests.get(url)
print('save rate result')

with open(JSON_FILE_PATH,'w') as json_file:
    json.dump(doc.json(),json_file,ensure_ascii=False)

print('ok')