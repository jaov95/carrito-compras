import React from 'react';
import { Nav,Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import Carro from './Carro';

class Navegacion extends React.Component{
    render(){
        return(
            <Navbar color="light" light expand="sm">
                <NavbarBrand>{this.props.titulo}</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Ofertas</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Contacto</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Acerca de</NavLink>
                    </NavItem>
                    <NavItem>
                        <Carro/>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Navegacion;