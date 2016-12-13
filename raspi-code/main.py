import requests

print '\a\a\a'

while True:
    print("Scan an id:")
    userInput = raw_input()
    if userInput:
        requestData = {'client': mainUser,
                       'userID': userInput}
        try:
            print '\a'
            r = requests.post('http://localhost:8888', timeout=0.001, json = requestData)
        except requests.exceptions.RequestException as e:
            print e
    else:
        print '\a'
