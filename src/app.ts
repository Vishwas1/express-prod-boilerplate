import express  from 'express';
import routes from './routes';
import swaggerJsDoc = require('./swagger.json');
import swaggerUi from 'swagger-ui-express';
import { PORT, baseUrl } from './config';
import helmet from 'helmet';

const app = express();

app.use(helmet())
app.use(express.json());

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc))
app.use('/api/v1/emp', routes.employee);
app.use('/api/v1/cust', routes.customer);

app.listen(PORT, () => console.log('Server is running @ ' + baseUrl));


