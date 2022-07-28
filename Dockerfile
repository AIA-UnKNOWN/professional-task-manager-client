FROM node:16

WORKDIR /app
COPY . .
RUN touch env.js
RUN echo "export default {api: {url: 'http://localhost:8888'}};" >> env.js
RUN npm install

CMD ["npm", "run", "dev"]