# Этап 1: Сборка
FROM node:18-alpine AS builder

# Установка рабочей директории
WORKDIR /app

# Копируем package.json и package-lock.json/yarn.lock
COPY package*.json ./

# Установка зависимостей
RUN npm install

# Копируем весь остальной код
COPY . .

# Сборка проекта
RUN npm run build

# Этап 2: Продакшн-образ
FROM node:18-alpine AS runner

# Установка рабочей директории
WORKDIR /app

# Копируем только нужные файлы из предыдущего образа
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Если есть TypeScript: не копировать исходники, если не нужно
# COPY --from=builder /app/.env ./.env

# Порт, который слушает Next.js
EXPOSE 3000

# Запуск приложения
CMD ["npm", "run", "start"]
