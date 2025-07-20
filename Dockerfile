FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY server/package*.json ./server/
RUN cd server && npm ci --only=production

COPY client/package*.json ./client/
RUN cd client && npm ci --only=production

COPY . .

# 클라이언트 빌드
RUN cd client && npm run build

EXPOSE 5000

# 서버 실행
CMD ["npm", "start"]