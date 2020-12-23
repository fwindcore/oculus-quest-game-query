import requests
import json

JSON_FILE_PATH="../public/oculus-quest-store.json"

url = "https://graph.oculus.com/graphql?forced_locale=zh_CN"
formData={
    "access_token":"OC|1317831034909742|",
    'variables':'{"sectionId":"1888816384764129","sortOrder":null,"sectionItemCount":999,"sectionCursor":null,"hmdType":"MONTEREY"}',
    "doc_id":"4565044133567732"
}
print('get doc')
doc = requests.post(url,data=formData)
print('save result')
# json.dump(doc.json(),open('oculus.json','w'))

with open(JSON_FILE_PATH,'w') as json_file:
    json.dump(doc.json(),json_file,ensure_ascii=False)

print('ok')