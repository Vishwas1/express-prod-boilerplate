FROM node:current-alpine3.13

RUN mkdir -p /usr/src/app/dist
WORKDIR /usr/src/app

# copy bundled code base
COPY dist/api.bundle.js dist

# copy env var
COPY production.env .

# env 
ENV NODE_ENV=production

# command to run when the image is initiated
CMD ["node", "dist/api.bundle.js"]
