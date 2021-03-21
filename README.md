## Simple node express server with typecript

```bash
npm i 
npm run dev  # developement
npm run build:dev
npm run build:prod 
npm run start  
npm run prod #production
```

Note: Create `production.env` for production run

## Features

- MVC framework
- Storage
    - In memory
    - mongo db?
    - sqlite?
- Typescript
- Nodemon
- Logging (`winston`)
- Environment variable (`dotenv`)
- Swagger to implement OpenAPI specification 3.0.0
    - Approach - API first (`swagger`)
- Use process manager  (`PM2`)
- Linting (`eslint`)
- Bundling (`webpack`)
- Containerization (`docker`)
- Security
    - Authentication ? 
    - Authorization ?
    - Appropriate headers (`helmet`)
- Testing ?


## References

- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment
- [API First approach](https://developers.redhat.com/blog/2019/01/14/building-a-node-js-service-using-the-api-first-approach/)
- https://www.freecodecamp.org/news/how-to-write-a-production-ready-node-and-express-app-f214f0b17d8c/
- https://medium.com/bb-tutorials-and-thoughts/how-to-write-production-ready-node-js-rest-api-typescript-version-94e993b368c0
- [Airbnb JavaScript Style Guide()](https://github.com/airbnb/javascript)
- [Linting in Typescript](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/)
- [](https://itnext.io/make-security-on-your-nodejs-api-the-priority-50da8dc71d68)
- [](https://thinkster.io/tutorials/node-json-api/configuring-middleware-for-authentication)
- [About helmet](https://helmetjs.github.io/)