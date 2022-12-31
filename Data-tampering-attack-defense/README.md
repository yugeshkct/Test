# Data-tampering-attack-defense
This is a project done with expressJs and stripe for payment gateway and protected through SHA 512

* This is just a testing website through which we can perform data tampering through burp suite and a way to prevent it 

# Screenshots

# Attacking thourgh burp suite in Data protection disabled mode

- [x] HomePage

![image](https://user-images.githubusercontent.com/88134306/196918814-2e3ad8c4-cc35-492b-bb3d-9cc7b4dbf1b1.png)

- [x] Changing value and forward it

![image](https://user-images.githubusercontent.com/88134306/196919757-a76c400e-4ea7-4916-b6ee-933602ce60ab.png)

- [x] Then you can see the value changes

![image](https://user-images.githubusercontent.com/88134306/196920134-2c092949-900d-4dd1-a027-aa2cf0c73e91.png)

- [x] Then buy the product (Remember it is a test website)

![image](https://user-images.githubusercontent.com/88134306/196920815-eeed6bc3-3712-45b0-8d78-626d792afc34.png)

- [x] It is redirect to success page

![image](https://user-images.githubusercontent.com/88134306/196920572-dc57c1c6-bbb2-441c-8c69-82c430654341.png)

- [x] We can see the price value has been changed

![image](https://user-images.githubusercontent.com/88134306/196921173-e575fcec-6c94-41ff-a18f-3860e8d21b3d.png)

# Attacking thourgh burp suite in Data protection enabled mode

- [ ] Home Page(Switch on enabled mode)

![image](https://user-images.githubusercontent.com/88134306/196921445-326e3f49-a422-42b2-83e3-5a09f864724c.png)

- [ ] Changing price to 1 using burp suite and forward it

![image](https://user-images.githubusercontent.com/88134306/196921689-f4bbfb8b-ce24-4e57-bd77-678d3d45954d.png)

- [ ] Redirects to Attack block page

![image](https://user-images.githubusercontent.com/88134306/196921922-1699a3bf-fb38-41d0-9af7-68a10b906d32.png)



