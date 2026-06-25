# ---- Stage 1 : dependances ----
FROM node:lts-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

# ---- Stage 2 : image finale ----
FROM node:lts-alpine
WORKDIR /app

RUN addgroup -S app && adduser -S app -G app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

EXPOSE 9000
USER app
CMD ["node", "server.js"]
