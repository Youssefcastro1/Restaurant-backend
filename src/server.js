require('./Database/sync.js')

const express = require('express');
const app = express();
const connection = require('./Database/connection.js');
const port = process.env.PORT || 1337;

//routers 

const restaurantrouter = require('./Routers/restaurantrouter.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connection.sync({force : false})
 .then(()=> {
    console.log('Base de datos sincronizada');
    app.listen(port,()=>{
        console.log('la aplicacion corre en el puerto: ' + port);
    });
})

.catch((error )=>{
    console.error('error al sincronizar la base de datos', error)});

app.use('/api',restaurantrouter);