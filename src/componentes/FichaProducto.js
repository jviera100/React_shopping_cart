//FichaProducto.js
import React from "react";
import { Modal, Button, Container, ModalHeader, ModalBody, ModalFooter, CardImg } from "reactstrap";
import './FichaProducto.css'
class FichaProducto extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal:false
        };
        this.toogle = this.toogle.bind(this);
        console.log(props.props); //hace visible la ficha del producto en consola de navegador
    }
    toogle(){
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }      
    render(){
        return(
            <Container>
                <Button onClick={this.toogle}>ver ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}/>
                        <p>El detalle del producto seleccionado es el siguiente: </p>
                        {this.props.props.descripcion}
                        <p>Este producto tiene un valor de <b>{this.props.props.precio}</b> pesos.</p>
                    </ModalBody>
                    <ModalFooter className="modalFooter">
                        <Button color="primary" onClick={this.toogle}>Agregar al carrito</Button>
                        <Button color="secondary" onClick={this.toogle}>Volver atrás</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default FichaProducto;