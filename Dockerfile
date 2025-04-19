FROM nginx:alpine

# Удаляем стандартную конфигурацию nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копируем свою конфигурацию
COPY nginx.conf /etc/nginx/conf.d

# Копируем свою конфигурацию 
COPY . /usr/share/nginx/html
