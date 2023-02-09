import React, { useEffect, useState } from "react";
import { Container,Row, Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";


const Profesores = () =>{
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        traerDatos();
    }, []);
    const navigate = useNavigate();
    const traerDatos = async () =>{
        await axios.get('http://localhost:5000/profesores')
        .then( function(response){
            setDatos(response.data.result); 
        }).catch(function(error){
            console.log(error);
        });
    };
    return(
        <Container className="mt-5">
             <>
            <h1 className="mb-5">Profesores </h1>
            <Row>
                <Col>
                <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Clave</th>
          <th>Nombre</th>
          <th>email</th>
          <th>Curp</th>
          <th>Telefono Movil</th>
          <th>estatus</th>
          <th>Acciones</th>




        </tr>
      </thead>
      <tbody>{
        datos.map(prof=>
            <tr key={prof.clave} >
            <td>{prof.clave}</td>
            <td>{prof.nombres}{''} {prof.apellidos}</td>
            <td>{prof.email}</td>
            <td>{prof.curp}</td>
            <td>{prof.tCelular}</td>
            <td>{prof.estatus}</td>
            <td>
                <Button onClick={ ()=> navigate(`/profesores/modificar/${prof.clave}`)} variant="primary" className="me-3" >Modificar</Button>
                <Button variant="danger" >Eliminar</Button>

            </td>






         </tr>   
            
            )
        }
      </tbody>
    </Table>
                </Col>
            </Row>
        </>
        </Container>
       
        )
    }   

   export default Profesores;