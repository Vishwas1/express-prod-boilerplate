import express  from 'express';
import routes from './routes';
import swaggerJsDoc = require('./swagger.json');
import swaggerUi from 'swagger-ui-express';
import { PORT } from './config';

const app = express();

app.use(express.json());

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc))
app.use('/api/v1/emp', routes.employee);
app.use('/api/v1/cust', routes.customer);


app.listen(PORT, () => console.log('Server running on port = ', PORT) );


