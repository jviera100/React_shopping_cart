//App.js
import React from 'react';
import Navegacion from './componentes/Navegacion';
import Producto from './componentes/Producto';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'reactstrap';
import {listaProductos} from './listaProductos.json'
import './App.css';
//import logo from './logo.svg';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      listaProductos
  };
}
  render(){
    const arregloComponentes = this.state.listaProductos.map(
      (listaProductos, i) =>{
        return(
          <Producto
          key={i}
          titulo={listaProductos.titulo}
          imagen={listaProductos.imagen}
          descripcion={listaProductos.descripcion}
          precio={listaProductos.precio}
          stock={listaProductos.stock}
          />
        )
      }
    );
   
    return (
      <Container>
        <Navegacion titulo="Mi primer sitio de compras en React"/>
        <Row>
          {arregloComponentes}                   
        </Row>           
      </Container>
    );
  };
}

export default App;

  /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <hr/>
          HOLA MUNDO DESDE REACT
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */

    //         <Producto
    //           titulo="Audífono Wf1000XM5/Bcuc Sony"
    //           imagen="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/16855059_1/w=1500,h=1500,fit=pad"
    //           descripcion="6 horas de reproducción. Carga rápida de 15 minutos para conseguir una hora adicional"
    //           precio="229.990"
    //         />
    //         <Producto
    //           titulo="Smartphone Samsung Galaxy S23 Ultra 256GB"
    //           imagen="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/16689937_01/w=1500,h=1500,fit=pad"
    //           descripcion="Pantalla Dynamic AMOLED 2X, 200 MP de cámara principal, 5000 mAh de batería"
    //           precio="1.399.990"
    //         />
    //         <Producto
    //           titulo="Smartwatch Huawei Watch GT 3 Pro"
    //           imagen="https://www.falabella.com/cdn-cgi/imagedelivery/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/16839119_2/width=480,height=480,quality=70,format=webp,fit=pad"
    //           descripcion="Pantalla AMOLED de 1.43 pulgadas, resistencia al agua 5ATM, batería de hasta 14 días"
    //           precio="229.990"
    //         />
    //         <Producto
    //           titulo="Tablet Lenovo Tab M10 HD"
    //           imagen="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/16814442_1/w=1500,h=1500,fit=pad"
    //           descripcion="Pantalla de 10.1 pulgadas, 32GB de almacenamiento, 2GB RAM"
    //           precio="149.990"
    //         />  
