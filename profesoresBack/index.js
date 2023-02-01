const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require ('cors');
const bcrypt = require('bcrypt');
const req = require('express/lib/request');

const app = express();
const port = 5000;
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "tutorias_user",
    database: "tutorias",
    password: "",
});

app.get('/',(req,res) => {
    res.send('Hola Mundo');
});
app.all('*',(req,res) => {
    res.send('Esta ruta no existe');
});
app.listen(port, ()=>{
    console.log(`Escuchando por el puerto ${port}`)
});