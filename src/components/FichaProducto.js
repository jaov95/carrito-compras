import React from 'react';
import {Modal,Container,Button, ModalHeader, ModalBody, ModalFooter, CardImg} from 'reactstrap';
import {productosCarro} from '../productosCarro.json';

class FichaProducto extends React.Component{
    constructor(props){
        super();
        this.state={
            modal:false,
            productosCarro,
            stock:props.props.stock
        };
        this.toggle = this.toggle.bind(this);
        this.agregarProducto = this.agregarProducto.bind(this);
    }

    toggle(){
        this.setState(prevState=>({
            modal: !prevState.modal
        }));
    }

    agregarProducto(){
        productosCarro.push({
            "titulo":this.props.props.titulo,
            "valor":this.props.props.valor
        })
        this.setState(prevState => ({
            modal: !prevState.modal,
            stock: parseInt(prevState.stock) - 1
        }))
    }

    render(){
        return(
            <Container>
                <Button onClick={this.toggle}>Ver Producto</Button> 
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen} />
                        <p>Descripción del producto:</p>
                        <p>{this.props.props.descripcion}</p>
                        <p>Valor: ${this.props.props.valor}</p>
                        <p>En stock: {this.state['stock']}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.agregarProducto}>Agregar al carro</Button>
                        <Button color="secondary" onClick={this.toggle}>Cerrar</Button>
                    </ModalFooter>
                </Modal> 
            </Container>  
        );
    }
}

export default FichaProducto;