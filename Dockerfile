FROM node:latest
WORKDIR /app
COPY ./package*.json ./ 
RUN npm install
COPY . .
ARG PORTER
RUN echo=$PORTER
ENTRYPOINT echo hi
CMD echo ok
