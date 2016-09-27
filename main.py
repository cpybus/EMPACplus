import requests

print '\a\a\a'
print ("Please scan the ID of the user who create the event:")
mainUser = ""
while True:
    mainUser = raw_input()
    if mainUser:
        break

authData = { 'user': mainUser }
try:
    r = requests.post('http://localhost:8888', timeout=10, json = authData)
except requests.exceptions.Timeout as e:
    # If the pairing step times out, the server hasn't responded and we should try again.


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
