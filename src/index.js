const express = require("express");
const morgan = require('morgan');
const v1WorkoutRouter = require("./v1/routes/workoutRoutes")

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./v1/docs/swagger')

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use("/api/v1/workouts", v1WorkoutRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});