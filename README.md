## Express API for production

## Features

1. **Planning**

    - Swagger to implement OpenAPI specification 3.0.0
    - Approach - API first (`swagger`)

2. **Development**

    - Framework
        - Nodejs express
        - MVC
    - Typescript
    - Node v14.16.0 (npm v6.14.11)
    - Storage
        - In memory
        - mongo db?
        - sqlite?
    - Logging (`winston`)
    - Nodemon
    - Environment variable (`dotenv`)
    - Linting (`eslint`)
    - Security
        - Authentication ? 
        - Authorization ?
        - Appropriate headers (`helmet`)

3. **Testing**

4. **Deployment**

    - Bundling (`webpack`)
    - Use process manager  (`PM2`)
    - Containerization (`docker`)


## Install and usage

Install dependencies
```bash
npm i 
```

Development

```bash
npm run dev 
```

```
npm run build:dev
npm run start  
```

Production

```bash
npm run build:prod 
npm run prod #production
```
Note: Create `production.env` for production run

### Dockerization

Build docker image
```
npm run build:prod
docker build -t ts-boilerplate .  # build an image
```

Run container
```
docker run -p 5000:5000 -d ts-boilerplate
```
Note: Create `production.env` for production run

## References

[Production deployment - by mozilla](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment) | [API First approach](https://developers.redhat.com/blog/2019/01/14/building-a-node-js-service-using-the-api-first-approach/) | [production-ready-node-and-express-app-](https://www.freecodecamp.org/news/how-to-write-a-production-ready-node-and-express-app-f214f0b17d8c/)
| [production-ready-node-js-rest-api-typescrip - blog](https://medium.com/bb-tutorials-and-thoughts/how-to-write-production-ready-node-js-rest-api-typescript-version-94e993b368c0) | [Airbnb JavaScript Style Guide()](https://github.com/airbnb/javascript) | [Linting in Typescript](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/) | [security-on-your-nodejs-api](https://itnext.io/make-security-on-your-nodejs-api-the-priority-50da8dc71d68) | [configuring-middleware-for-authentication](https://thinkster.io/tutorials/node-json-api/configuring-middleware-for-authentication) | [About helmet](https://helmetjs.github.io/) | [Good repo to follow](https://github.com/microverseinc/project-nodejs-rest-api) | [Docker publish vs expose](https://www.whitesourcesoftware.com/free-developer-tools/blog/docker-expose-port/)