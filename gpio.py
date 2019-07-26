from gpiozero import LED, Button
from signal import pause
import os


button = Button(2)

def message(r):
    print("opening app")
    r = os.system("chromium-browser --app=https://127.0.0.1/")
    print(r)

button.when_pressed = message


pause()
