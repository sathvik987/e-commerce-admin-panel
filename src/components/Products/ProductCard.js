import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Product.css'


class ProductCard extends React.Component {


    deleteProduct = () => {
        let result = window.confirm('You sure.?');
        if (result) {
            fetch('https://arcane-sea-44247.herokuapp.com/products/deleteproduct', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    productname: this.props.productname
                })

            }).then(res => res.json())
                .then(msg => {
                    if (msg === 'Done') {
                        this.props.refresh()
                    }
                })

        }
    }

    render() {


        return (
            <div>
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={"https://arcane-sea-44247.herokuapp.com/" + this.props.image} className="imgs" />
                    <Card.Body>
                        <Card.Title>{this.props.productname}</Card.Title>
                        <Card.Text style={{ fontSize: "13px" }}>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            ₹ {this.props.price}
                            <Button className="float-right" variant='primary' onClick={this.deleteProduct}>
                                Delete
                        </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
            </div>

        )
    }
}


export default ProductCard;