//Producto.js
import React from 'react';
import { CardSubtitle, CardTitle, CardBody, Col, Card, CardImg, CardText } from 'reactstrap';
import './Producto.css'
import FichaProducto from './FichaProducto';

class Producto extends React.Component{
    render(){
        return (
            <Col sm="4"> {/* Esto asegura que el layout se vea bien */}
                <Card className='Card' body outline color="primary">
                    <CardImg src={this.props.imagen}></CardImg>
                    <CardBody>
                        <CardTitle>{this.props.titulo}</CardTitle> {/* Título dentro del Card */}
                        <CardSubtitle><b>precio :</b>{this.props.precio}</CardSubtitle> 
                        <CardText>{this.props.descripcion}</CardText>   
                        <FichaProducto props={this.props}/>             
                    </CardBody>
                </Card>
            </Col>
        );
    }    
}

export default Producto;