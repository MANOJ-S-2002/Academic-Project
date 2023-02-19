from pynput import keyboard

result=""

def on_press(key):
    global result
    try:
        result=result+key.char
    

    except AttributeError:
        reskey=key
        if (str(reskey)=="space   "):
            result=result+""
            print(result)
        else:
            result=result+""+str(reskey)+""
            print (result)

with keyboard.Listener(on_press=on_press) as Listener:
    Listener.join()