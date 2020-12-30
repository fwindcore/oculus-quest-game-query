import requests
import json

JSON_FILE_PATH = "../public/usd-rate.json"

result = {}

for code in ['USD', 'JPY']:
    print('get rate %s' % (code))
    url = "https://api.it120.cc/gooking/forex/rate?fromCode=CNY&toCode=%s" % (
        code)
    doc = requests.get(url)
    result[code] = doc.json().get('data')

print('save rate result')
with open(JSON_FILE_PATH, 'w') as json_file:
    json.dump(result, json_file, indent='\t', ensure_ascii=False)

print('ok')
