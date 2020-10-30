import requests
import json
# import keys
key='60e80b54afbe41d3341c250a9d438411'
print(key)
def execute(lat,lng):
    try:
        url='http://api.weatherstack.com/current?access_key='+key+'&query='+str(lat)+','+str(lng)
        # print(url)
        locDetais=json.loads(requests.get(url).text)
        # print(locDetais)
        precip=locDetais["current"]["precip"]
        temp=locDetais["current"]["temperature"]
        print("rain and temp")
        print(precip,temp)
        return [(precip),(temp)]
    except:
        return 0

# execute(12.9745083,79.1572194)