# Next.js Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN npm install react-markdown
EXPOSE 3000
CMD ["npm", "start"]
