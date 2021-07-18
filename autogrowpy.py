import serial
import time
import struct

arduino_port = "COM7" #serial port of Arduino
baud = 9600 #arduino uno runs at 9600 baud
fileName="analog-data.csv" #name of the CSV file generated

ser = serial.Serial(arduino_port, baud)
print("Connected to Arduino port:" + arduino_port)
file = open(fileName, "a")
print("Opened file")

while True:
   o = int(time.strftime('%m'))
   d = int(time.strftime('%d'))
   h = int(time.strftime('%H'))
   m = int(time.strftime('%M'))
   s = int(time.strftime('%S'))
   ser.write(struct.pack("BBB",h,m,s))
   msg = ser.readline()
   msg = msg.strip() #removes the extra new line character
   print(msg.decode('utf-8')) #removes the additional characters for each line
   file.write(time.strftime('%m-%d-%Y %H:%M:%S') + "," + msg.decode('utf-8') + "\n")
   

print("Data collection complete!")
file.close()

#close the serial port
ser.close()


