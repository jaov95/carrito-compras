import React from 'react';
import { Badge, Button, Popover, PopoverBody, PopoverHeader, Table } from 'reactstrap';
import {productosCarro} from '../productosCarro.json';

class Carro extends React.Component{
    constructor(){
      super();
      this.state={
        popoverOpen:false,
        productosCarro
      };
      this.toggle=this.toggle.bind(this);
    }

    toggle(){
      this.setState(prevState => ({
        popoverOpen: !prevState.popoverOpen
      }));
    }

    render(){
        const arregloProductos = this.state.productosCarro.map(
          (productosCarro, i) => {
            return(
              <tr>
                <td>{(i +=1)}</td>
                <td>{productosCarro.titulo}</td>
                <td>{productosCarro.valor}</td>
              </tr>
            );
          }
        )
        var valorTotal=0;
        productosCarro.forEach(producto => {
          valorTotal +=parseFloat(producto.valor)
        });

        return (
          <div>
            <Button id="Popover1" color="info">
              <span class="material-icons">shopping_cart</span>
        <Badge color="secondary">{arregloProductos.length}</Badge>
            </Button>
            <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
              <PopoverHeader>Productos agregados</PopoverHeader>
              <PopoverBody>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Producto</th>
                      <th>Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arregloProductos}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>Cantidad: {arregloProductos.length}</td>
                      <td>Valor Total:</td>
                      <td>${valorTotal}</td>
                    </tr>
                  </tfoot>
                </Table>
              </PopoverBody>
            </Popover>
          </div>
        );
    }
}

export default Carro;