FROM node:current-alpine3.13

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy bundled code base
COPY dist/api.bundle.js .

# env 
ENV NODE_ENV=production
ENV HOST=127.0.0.1
ENV PORT=5000
ENV LOG_LEVEL=info

# expose port
EXPOSE $PORT

# command to run when the image is initiated
CMD ["node", "api.bundle.js"]
