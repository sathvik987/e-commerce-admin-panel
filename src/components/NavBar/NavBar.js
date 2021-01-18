import React from 'react';
import './NavBar.css'
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productsClass: "active",
            ordersClass: "",
            messagesClass: "",

        }
    }

    activeProducts = () => {
        this.setState({
            productsClass: "active",
            ordersClass: "",
            messagesClass: "",
        })

    }
    activeMessages = () => {
        this.setState({
            productsClass: "",
            ordersClass: "",
            messagesClass: "active",
        })

    }
    activeOrders = () => {
        this.setState({
            productsClass: "",
            ordersClass: "active",
            messagesClass: "",
        })

    }


    render() {

        return (
            <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand>adminPanel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => { this.props.onRouteChange('products'); this.activeProducts() }} className={this.state.productsClass}>Products</Nav.Link>
                        <Nav.Link onClick={() => { this.props.onRouteChange('orders'); this.activeOrders() }} className={this.state.ordersClass}>Orders</Nav.Link>
                        <Nav.Link onClick={() => { this.props.onRouteChange('messages'); this.activeMessages() }} className={this.state.messagesClass}>Messages</Nav.Link>
                    </Nav>
                    <Nav className="mr">
                        <Nav.Link onClick={this.props.signOut}>Logout</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}



export default NavBar;