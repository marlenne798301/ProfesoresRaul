import React, { useState } from "react";
import BarraSuperior from "./BarraSuperior";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";

export const ProfesoresAgregar = () => {
  const initialState = {
    clave: "",
    nombres: "",
    apellidos: "",
    fNacimiento: "",
    email: "",
    sexo: "",
    estadoCivil: "",
    tCasa: "",
    curp: "",
    tCelular: "",
    calle: "",
    colonia: "",
    cp: "",
    municipio: "",
    estado: "",
  };

  const [datos, setDatos] = useState(initialState);
  const {
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
  } = datos;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div>
      <BarraSuperior />
      <Container>
        <Row>
          <Col></Col>

          <Col className="mt-3">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formClave">
                <Form.Label>Clave</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu clave"
                  name="clave"
                  requiered
                  value={clave}
                  onChange={handleChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formNombres">
                <Form.Label>Nombres</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tus nombres"
                  name="nombres"
                  requiered
                  value={nombres}
                  onChange={handleChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formApellidos">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tus Apellidos"
                  name="apellidos"
                  requiered
                  value={apellidos}
                  onChange={handleChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formfNacimiento">
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Selecciona tu fecha de nacimiento"
                  name="fNacimiento"
                  requiered
                  value={fNacimiento}
                  onChange={handleChange}
                />

                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu correo electronico"
                  name="email"
                  requiered
                  value={email}
                  onChange={handleChange}
                />

                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSexo">
                <Form.Label>Sexo</Form.Label>
                <Form.Select name="sexo" value={sexo} onChange={handleChange}>
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>No Binario</option>
                </Form.Select>

                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formestadoCivil">
                <Form.Label>Estado Civil</Form.Label>

                <Form.Select
                  aria-label="Estado Civil"
                  name="estadoCivil"
                  value={estadoCivil}
                  onChange={handleChange}
                >
                  <option>Soltero/a</option>
                  <option>Casado/a</option>
                  <option>Divorciado/a</option>
                  <option>Union Libre</option>
                  <option>Viudo/a</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formsCasa">
                <Form.Label>Telefono de casa</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu telefono de casa"
                  name="tCasa"
                  pattern="/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/
                  "
                  value={tCasa}
                  onChange={handleChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formsCurp">
                <Form.Label>CURP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu CURP"
                  name="curp"
                  pattern="/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/
                  "
                  requiered
                  value={curp}
                  onChange={handleChange}
                />

                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formstCelular">
                <Form.Label>Telefono Movil</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu telefono celular"
                  name="tCelular"
                  pattern="/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/
                  "
                  requiered
                  value={tCelular}
                  onChange={handleChange}
                />

                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formsCalle">
                <Form.Label>Calle</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu Direccion"
                  name="calle"
                  value={calle}
                  onChange={handleChange}
                />

                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formsColonia">
                <Form.Label>Colonia/Fraccionamiento</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa la colonia o fraccionamiento donde vives"
                  name="colonia"
                  requiered
                  value={colonia}
                  onChange={handleChange}
                />

                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formsCp">
                <Form.Label>Codigo Postal</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingresa tu codigo postal"
                  name="cp"
                  requiered
                  pettern="[0-9]{5}"
                  value={cp}
                  onChange={handleChange}
                />

                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formsMunicipio">
                <Form.Label>Municipio</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu Municipio"
                  name="municipio"
                  requiered
                  value={municipio}
                  onChange={handleChange}
                />

                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formsEstado">
                <Form.Label>Estado</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu estado o provincia"
                  name="estado"
                  requiered
                  value={estado}
                  onChange={handleChange}
                />

                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};
export default ProfesoresAgregar;