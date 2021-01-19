import React from 'react';
import Product from "./ProductCard";
import { Button } from 'react-bootstrap';


class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch('https://arcane-sea-44247.herokuapp.com/products/getproducts')
            .then(response => response.json())
            .then(items => this.setState({ products: items }));

    }

    refresh = () => {
        fetch('https://arcane-sea-44247.herokuapp.com/products/getproducts')
            .then(response => response.json())
            .then(items => this.setState({ products: items }));

    }

    componentWillUnmount() {
        this.setState({ products: [] })
    }



    addProducts = () => {
        this.props.onRouteChange('addproducts')
    }

    render() {

        return (
            <div>
                <div>
                    <Button className="addButton float-right" variant='primary' onClick={this.addProducts}>
                        Add product
                    </Button>
                </div>

                <div className='center_divP'>
                    <div className='grid-wrapper'>
                        {
                            this.state.products.map((item) => {

                                return (<Product key={item.productname}
                                    productname={item.productname}
                                    description={item.description}
                                    price={item.price}
                                    image={item.image}
                                    refresh={this.refresh}
                                />)

                            })
                        }
                    </div>

                </div>

            </div>
        )
    }
}



export default Products;