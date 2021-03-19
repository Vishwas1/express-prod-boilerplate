import express  from 'express';
import routes from './routes';
import swaggerJsDoc = require('./swagger.json');
import swaggerUi from 'swagger-ui-express';

const app = express();

app.use(express.json());

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc))
app.use('/api/v1/emp', routes.employee);
app.use('/api/v1/cust', routes.customer);


app.listen(5000, () => console.log('Server running on port 5000') );


