# install the base image for the application
FROM node:20-alpine as build

# set the app working directory
WORKDIR /app
RUN cd $WORKDIR

# copy the app code
COPY . .

# install the dependencies
RUN yarn install

#build the app code
RUN yarn run build

FROM nginx:1.25.1-alpine

# Copy the Nginx config
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/public/ /usr/share/nginx/html

# Expose the port for access
EXPOSE 80/tcp

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]