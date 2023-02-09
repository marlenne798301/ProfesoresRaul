import React, { useState } from 'react';
import axios from 'axios';
import { Row, Container, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ProfesoresAgregar = () => {
    const initialState = {
        clave: '',
        nombres: '',
        apellidos: '',
        fNacimiento: '',
        email: '',
        sexo: '',
        estadoCivil: '',
        tCasa: '',
        curp: '',
        tCelular: '',
        calle: '',
        colonia: '',
        cp: '',
        municipio: '',
        estado: '',
    }

    const [datos, setDatos] = useState(initialState);
    const { clave, nombres, apellidos, fNacimiento, email, sexo, estadoCivil, tCasa, curp, tCelular, calle, colonia, cp, municipio, estado } = datos;
    const navigate = useNavigate();
    const handleChange = (e) => {
        let { name, value } = e.target;
        setDatos({ ...datos, [name]: value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault() //Para no tener que recargar la pagina
        const { clave, nombres, apellidos, fNacimiento, email, sexo, estadoCivil, tCasa, curp, tCelular, calle, colonia, cp, municipio, estado } = datos;
        const formData = new FormData();
    
        formData.append("clave", clave);
        formData.append("nombres", nombres);
        formData.append("apellidos", apellidos);
        formData.append("fNacimiento", fNacimiento);
        formData.append("email", email);
        formData.append("sexo", sexo);
        formData.append("estadoCivil", estadoCivil);
        formData.append("tCasa", tCasa);
        formData.append("curp", curp);
        formData.append("tCelular", tCelular);
        formData.append("calle", calle);
        formData.append("colonia", colonia);
        formData.append("cp", cp);
        formData.append("municipio", municipio);
        formData.append("estado", estado);

        await axios.post("http://localhost:5000/profesores/agregar", formData)
            .then((response) => {
                //console.log(response);
                notify(response.status);
            }).catch((err) => {
                console.log(err);
            });

    }
    function notify(num) {
        if(num===200){
            toast.success(
                'profesor agregado',
                {
                    position: toast.POSITION.TOP_CENTER,
                    onClose:() => {
                        handleCancelar();
                        navigate('/profesores');
                    },
                    autoClose:1000,
                    theme: "colored"
                },
            );
        }
    }

    const  handleCancelar = () => {
        setDatos(initialState);
        return 0;
    }

    return (
        <>
           
            <Container>
                <Row>
                    <Col>
                       <ToastContainer />
                    </Col>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formClave">
                                <Form.Label>Clave: </Form.Label>
                                <Form.Control name="clave" type="text" placeholder="Ingresa tu clave" required value={clave} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formNombres">
                                <Form.Label>Nombres: </Form.Label>
                                <Form.Control name="nombres" type="text" placeholder="Ingresa tus nombres" required value={nombres} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formApellidos">
                                <Form.Label>Apellidos: </Form.Label>
                                <Form.Control name="apellidos" type="text" placeholder="Ingresa tus apellidos" required value={apellidos} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formfNacimiento">
                                <Form.Label>Fecha de nacimiento: </Form.Label>
                                <Form.Control name="fNacimiento" type="date" placeholder="Ingresa tu fecha de nacimiento" required value={fNacimiento} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Correo Electronico: </Form.Label>
                                <Form.Control name="email" type="email" placeholder="Ingresa tu correo electronico" required value={email} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSexo">
                                <Form.Label>Sexo: </Form.Label>
                                <Form.Select aria-label="Sexo" name="sexo" required value={sexo} onChange={handleChange} >
                                    <option>Selecciona tu sexo</option>
                                    <option value="Femenio">Femenino</option>
                                    <option value="Masculino">Masculino</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formestadoCivil">
                                <Form.Label>Estado Civil: </Form.Label>
                                <Form.Select aria-label="Estado Civil" name="estadoCivil" required value={estadoCivil} onChange={handleChange}>
                                    <option>Selecciona tu estado civil:</option>
                                    <option value="Soltero">Soltero (a)</option>
                                    <option value="Casado">Casado (a)</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formtCasa">
                                <Form.Label>Teléfono de Casa: </Form.Label>
                                <Form.Control name="tCasa" type="text" placeholder="Ingresa tu teléfono de casa" 
                                //pattern='[(][0-9]{3}[)][0-9]{7}'
                                 value={tCasa} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formcurp">
                                <Form.Label>CURP: </Form.Label>
                                <Form.Control name="curp" type="text" placeholder="Ingresa tu CURP" required 
                                //pattern='^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$'
                                 value={curp} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formtCelular">
                                <Form.Label>Teléfono movil: </Form.Label>
                                <Form.Control name="tCelular" type="text" placeholder="Ingresa tu teléfono de celular" 
                                //pattern='[(][0-9]{3}[)][0-9]{7}'
                                 required value={tCelular} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formCalle">
                                <Form.Label>Calle: </Form.Label>
                                <Form.Control name="calle" type="text" placeholder="Ingresa tu calle" required value={calle} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formColonia">
                                <Form.Label>Colonia: </Form.Label>
                                <Form.Control name="colonia" type="text" placeholder="Ingresa tu colonia" required value={colonia} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formCp">
                                <Form.Label>Codigo Postal: </Form.Label>
                                <Form.Control name="cp" type="number" placeholder="Ingresa tu codigo postal" required pattern='[0-9]{5}' value={cp} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formMunicipio">
                                <Form.Label>Municipio: </Form.Label>
                                <Form.Control name="municipio" type="text" placeholder="Ingresa tu municipio" required value={municipio} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEstado">
                                <Form.Label>Estado: </Form.Label>
                                <Form.Control name="estado" type="text" placeholder="Ingresa tu estado" required value={estado} onChange={handleChange} />
                            </Form.Group>

                            <Button variant="primary" type="submit" >
                                Enviar
                            </Button>
                            <Button variant="info" onClick={ handleCancelar } className="me-3" >
                                Cancelar
                            </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}

export default ProfesoresAgregar;