import React from 'react';
import {CardText, CardSubtitle, CardTitle, CardBody, CardImg, Card, Col} from 'reactstrap';
import './Producto.css';
import FichaProducto from './FichaProducto';

class Producto extends React.Component{
    render(){
        return(
            <Col sm="4">
                <Card className="Card" body outline color="primary">
                    <CardImg className="CardImg" src={this.props.imagen}/>
                    <CardBody>
                        <CardTitle>{this.props.titulo}</CardTitle>
                        <CardSubtitle><b>Valor: </b>${this.props.valor}</CardSubtitle>
                        <CardText className="CardText">
                            {this.props.descripcion}
                        </CardText>
                        <FichaProducto props={this.props}/>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Producto;