# Next.js Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN npm install react-markdown
RUN npm install --legacy-peer-deps
EXPOSE 3000
CMD ["npm", "start"]
