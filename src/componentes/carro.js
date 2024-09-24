//Carro.js
import React from "react";
import { Badge, Button, Table, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import {listaCarrito} from '../listaCarrito.json'

class Carro extends React.Component{
    constructor(){
        super();
        this.state = {
            popoverOpen:false,
            listaCarrito
        };
        this.toogle = this.toogle.bind(this);        
    }
    toogle(){
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }));
    } 
    render(){
        const arregloCarrito = this.state.listaCarrito.map(
            (listaCarrito, i) =>{
              return(
                <tr>                                
                    <td>{(i += 1)}</td>
                    <td>{listaCarrito.titulo}</td>
                    <td>{listaCarrito.precio}</td>
                </tr>
              )
            }
          );
        return(
            <div>
                <Button id="Popover1" color="info">
                    <span className="material-simbols-outlined">shopping_cart</span>
                    <Badge color="secondary">{arregloCarrito.length}</Badge>
                </Button>
                <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toogle}>
                    <PopoverHeader>Listado de compras</PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>producto</th>
                                    <th>precio</th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                {arregloCarrito}                                
                            </tbody>
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        )
    }
}
export default Carro;