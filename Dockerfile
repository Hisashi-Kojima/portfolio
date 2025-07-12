FROM node:22-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    git \
    && rm -rf /var/lib/apt/lists/*

# キャッシュを想定。
# npm installのために先にpackage*.jsonだけコピー
COPY package*.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]