import express from 'express';
import morgan from 'morgan';

// Importing Routes
import centroRoutes from './routes/centros';
import calificacionRoutes from './routes/calificaciones';

// Initialization
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Routes
app.use('/api/centros', centroRoutes);
app.use('/api/calificaciones', calificacionRoutes);

app.use('/api', swaggerUi.serve);
app.get('/api', swaggerUi.setup(swaggerDocument));

export default app;