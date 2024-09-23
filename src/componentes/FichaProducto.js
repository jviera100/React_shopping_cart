//FichaProducto.js
import React from "react";
import { Modal, Button, Container, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class FichaProducto extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal:false
        };
        this.toogle = this.toogle.bind(this);
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
                    <ModalHeader></ModalHeader>
                    <ModalBody></ModalBody>
                    <ModalFooter>
                        <Button>Agregar al carrito</Button>
                        <Button>Volver atrás</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default FichaProducto;