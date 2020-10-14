import React from 'react';
import Producto from './components/Producto';
import Navegacion from './components/Navegacion';
import './App.css';
import {Container, Row} from 'reactstrap';
import {listaProductos} from './listaProductos.json';

class App extends React.Component{

  constructor(){
    super();
    this.state ={
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
            valor={listaProductos.valor}
            stock={listaProductos.stock}
          />
        )
      }
    );

    return(
      <Container>
       <Navegacion titulo="Carrito de compras con React"/>
       <Row>
         {arregloComponentes}
       </Row>
      </Container>
    );
 } 
}

export default App;
