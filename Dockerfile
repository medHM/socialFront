FROM node:10.13.0
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g @angular/cli

COPY . /usr/src/app

CMD ng serve --host 0.0.0.0 --port 4200

#docker build -t social-front .


#Step 6/6 : CMD ng serve --host 0.0.0.0 --port 4200
# ---> Running in 8d2726d102f1
#Removing intermediate container 8d2726d102f1
# ---> 9c1adbec7576
#Successfully built 9c1adbec7576
#Successfully tagged social-front:latest
