FROM node
LABEL name="vue-back"
LABEL version="1.0"
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 5000
CMD npm start
