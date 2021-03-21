## Simple node express server with typecript

```bash
npm i 
npm run dev  # developement
npm run build
npm run start  #production
```

Note: Create `production.env` for production run

## Features

- MVC framework
- Storage
    - In memory
- Typescript
- Nodemon
- Logging (`winston`)
- Environment variable (`dotenv`)
- Swagger to implement OpenAPI specification 3.0.0
    - http://localhost:5000/api/v1/docs/ 
- Use process manager  (PM2)

## References

- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment
- [API First approach](https://developers.redhat.com/blog/2019/01/14/building-a-node-js-service-using-the-api-first-approach/)
- https://www.freecodecamp.org/news/how-to-write-a-production-ready-node-and-express-app-f214f0b17d8c/