import React from 'react';
import { Card, Button } from 'react-bootstrap';


class OrdersCard extends React.Component {



    cancelOrder = () => {

        fetch('http://localhost:9000/orders/orderstatus', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                date: this.props.date,
                email: this.props.email,
                status: 'Canceled',
            })

        }).then(res => res.json())
            .then(ords => {
                this.props.refreshOrders();
            })

    }


    shipOrder = () => {

        fetch('http://localhost:9000/orders/orderstatus', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                date: this.props.date,
                email: this.props.email,
                status: 'Shipped',
            })

        }).then(res => res.json())
            .then(ords => {
                this.props.refreshOrders();
            })

    }


    completedOrder = () => {

        fetch('http://localhost:9000/orders/orderstatus', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                date: this.props.date,
                email: this.props.email,
                status: 'Completed',
            })

        }).then(res => res.json())
            .then(ords => {
                this.props.refreshOrders();
            })

    }

    render() {

        let d = new Date(this.props.date);

        return (
            <div>
                <Card>
                    <Card.Header><strong>Order placed: </strong> {d.toUTCString()}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <strong>Username:</strong> {this.props.username}
                        </Card.Text>
                        <Card.Text>
                            <strong>Email:</strong> {this.props.email}
                        </Card.Text>
                        <Card.Text>
                            <strong>Products:</strong> {this.props.products}
                        </Card.Text>
                        <Card.Text>
                            <strong>Price:</strong> ₹ {this.props.price}
                        </Card.Text>
                        <Card.Text>
                            <strong>Address:</strong> {this.props.address}
                        </Card.Text>
                        <Card.Text>
                            <strong>Status:</strong> {this.props.status}
                        </Card.Text>
                        <div>
                            <Button variant="primary" size='sm' onClick={this.cancelOrder} style={{ margin: '1em' }}>Cancel</Button>
                            <Button variant="primary" size='sm' onClick={this.shipOrder} style={{ margin: '1em' }}>Ship</Button>
                            <Button variant="primary" size='sm' onClick={this.completedOrder} style={{ margin: '1em' }}>Complete</Button>
                        </div>
                    </Card.Body>
                </Card>
                <br />
            </div >
        )
    }
}

export default OrdersCard;
