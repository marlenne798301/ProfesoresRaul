const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require ('cors');
const bcrypt = require('bcrypt');
const fileUpload = require ('express-fileupload');

const app = express();
const port = 5000;
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';


app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tutorias',
    password :"",
  });

app.get('/',(req,res) => {
    res.send('Hola Mundo')
});

app.post('/profesores/agregar', (req, res) => {
    const{
        clave,
    nombres,
    apellidos,
    fNacimiento,
    email,
    sexo,
    estadoCivil,
    tCasa,
    curp,
    tCelular,
    calle,
    colonia,
    cp,
    municipio,
    estado,
    } = req.body;
    const sql = "INSERT INTO profesores(clave,nombres,apellidos,fNacimiento,email,sexo,estadoCivil,tCasa,curp,tCelular,calle,colonia,cp,municipio,estado,estatus) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sql,[clave,nombres,apellidos,fNacimiento,email,sexo,estadoCivil,tCasa,curp,tCelular,calle,colonia,cp,municipio,estado,'inactivo'],(err, result)=>{
        if(err){
            res.send({
                status:100,
                errNo:err.errno,
                mensaje: err.message,
                codigo: err.code,
            })
        } else {
            res.send({
                status:200,
                resultado:result,
            })
        }
    });
});
app.get('/profesores', (req, res) => {
    const sql = 'SELECT * FROM profesores';
    db.query(sql, (err, result, fields) => {
        if(!err) {
            res.send({
                status:200,
                result,
            })
        }else{
            res.send({
                status:400,
                result:{},
            })
        }
    });
});
app.all('*', (req,res) => {
    res.send('Esta Ruta no existe')
});

app.listen(port, ()=>{
    console.log(`Escuchando por el puerto ${port}`)
});