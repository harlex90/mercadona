
FROM node:16.13 as build-deps

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Use the official nginx image as the run image
FROM nginx
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html

# Expose the default nginx port
EXPOSE 80
