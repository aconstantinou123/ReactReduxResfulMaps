FROM node:carbon
ADD . /code
WORKDIR /code
RUN npm install
RUN npm run seeds
EXPOSE 5000
CMD npm start