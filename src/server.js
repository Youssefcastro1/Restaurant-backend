const express = require('express');
const app = express();
const conecction = require('./Database.conecction');
const port = process.env.PORT || 1337;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
conecction.sync()
.then(()=>{
    console.log('Base de datos sincronizada');
    app.listen(port,()=>{
        console.log('la aplicacion corre en el puerto: ' + port);
    });
})

.catch((error )=>{
    console.error('error al sincronizar la base de datos', error)});