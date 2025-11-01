FROM node:20-alpine

WORKDIR /usr/src/app

# Install dependencies first for caching
COPY package*.json ./
RUN npm ci

# Copy project files
COPY . .

RUN npx prisma generate

# Build NestJS app
RUN npm run build

CMD ["sh", "-c", "npx prisma generate && npm run start:migrate:deploy"]