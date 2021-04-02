## Express API boilerplate for production

When building REST APIs using node express, it is very easy to get confused as there are so many packages/tools available for different purposes - you do not know which to use and when! In this repository, I tried to consolidate them in this boilerplate repository and use them for example apis with CURD operations. I tried to keep this project (or boilerplate) as close to production as possible, but yeah we know nothing is perfect when it comes to prod deployment but atleast we can give our best. I also believe that, I might have missed out something for sure, which I request you to create an issue, if you find one.

### Some thoughts

Building REST apis are fun, but what I have observed is, when you think from start to end, meaning right from planning about these apis, till the deployment of apis (which ofcouse includes security and other important aspects), it becomes more complex and at the same time more fun. So the question is how do we start?

First we plan, in the planning phase you are looking at the whole product without even building it. Writing APIs specification (ofcoures when you have passed the design phase) could be good starting point. You design the API specifications so that:

- frontend guy start developing the UI, 
- testers start wrting the test cases 
- and backend folks, start working on developing APIs. 

All these process happens parallely. This process is called [API first approach](https://developers.redhat.com/blog/2019/01/14/building-a-node-js-service-using-the-api-first-approach/). I love this approach since it gives me visibility of the whole product before writing too much code! Once done, you repeat the whole process if needed.

## Features

1. **Planning**

    - Swagger to implement OpenAPI specification 3.0.0
    - Approach - API first (`swagger`)

2. **Development**

    - Framework
        - Nodejs express
        - MVC
        - Typescript
        - Node v14.16.0
    - Debugging (`nodemon`, `ts-node`)
    - Storage
        - mongo db        
    - Logging (`winston`)    
    - Environment variable (`dotenv`)
    - Linting (`eslint`)
    - Security
        - Authentication ? 
        - Authorization ?
        - Prevents DOS attack
            - limit body payload
            - express rate limit dependency (`express-rate-limit`)
        - Prevents XSS attacks
            - Appropriate headers (`helmet`)
            - Data Sanitization against XSS (`xss-clean`)

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
| [production-ready-node-js-rest-api-typescrip - blog](https://medium.com/bb-tutorials-and-thoughts/how-to-write-production-ready-node-js-rest-api-typescript-version-94e993b368c0) | [Airbnb JavaScript Style Guide()](https://github.com/airbnb/javascript) | [Linting in Typescript](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/) | [security-on-your-nodejs-api](https://itnext.io/make-security-on-your-nodejs-api-the-priority-50da8dc71d68) | [configuring-middleware-for-authentication](https://thinkster.io/tutorials/node-json-api/configuring-middleware-for-authentication) | [About helmet](https://helmetjs.github.io/) | [Good repo to follow](https://github.com/microverseinc/project-nodejs-rest-api) | [Docker publish vs expose](https://www.whitesourcesoftware.com/free-developer-tools/blog/docker-expose-port/) | [make your NodeJS application or API secure](https://itnext.io/make-security-on-your-nodejs-api-the-priority-50da8dc71d68) | [Gracefully shutdown handling](https://hackernoon.com/graceful-shutdown-in-nodejs-2f8f59d1c357) | [Using sqeuelize](https://sequelize.org/master/manual/model-basics.html) | [Learn Typescript](https://www.typescriptlang.org/docs/) | [setup-typecript-sequelize](https://vivacitylabs.com/setup-typescript-sequelize/) | [strongly-typed-models-with-mongoose-and-typescript](https://tomanagle.medium.com/strongly-typed-models-with-mongoose-and-typescript-7bc2f7197722) | [Hypersign passwordless authentication official doc](https://vishwas-anand-bhushan.gitbook.io/hypersign/developer/sdk/dev-nodejs/hypersign-js-sdk)