import http from 'http';
import express  from 'express';
import routes from './routes';
import swaggerJsDoc = require('./swagger.json');
import swaggerUi from 'swagger-ui-express';
import { PORT, baseUrl, logger, db } from './config';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import xss from 'xss-clean';
import HypersignAuth from 'hypersign-auth-js-sdk';

const app = express();
const server =  http.createServer(app);
const hypersign = new HypersignAuth(server);

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests' // message to send
  });
  

app.use(helmet())
app.use(limiter)
app.use(xss())
app.use(express.json({ limit: '10kb' }));
// app.use(express.static(staticDir));

// app.get('/', function(req, res) {
//   res.sendFile(staticDir + '/index.html');
// });

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc))
app.use('/api/v1/user', routes.user(hypersign));
app.use('/api/v1/emp', routes.employee(hypersign));

app.listen(PORT, () => console.log('Server is running @ ' + baseUrl));

// process.on('SIGTERM', () => {
//   console.log("");
  
//   logger.error('SIGTERM signal received.');
//   logger.error('Gracefully closing the database connection')
//   db.close();
// });