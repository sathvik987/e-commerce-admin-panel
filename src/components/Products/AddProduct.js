import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Product.css'



class AddProducts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productname: '',
            price: '',
            description: '',
            type: 'phone',
            image: ''
        }
    }

    onProductChange = (event) => {
        this.setState({ productname: event.target.value })

    }

    onPriceChange = (event) => {
        this.setState({ price: event.target.value })

    }

    onDescriptionChange = (event) => {
        this.setState({ description: event.target.value })

    }

    onTypeChange = (event) => {
        this.setState({ type: event.target.value })

    }

    onImageChange = (event) => {
        this.setState({ image: event.target.files[0] })

    }


    onSubmit = () => {
        if (this.state.productname && this.state.price && this.state.type && this.state.description && this.state.image) {
            let formdata = new FormData()
            formdata.append('productname', this.state.productname)
            formdata.append('price', this.state.price)
            formdata.append('description', this.state.description)
            formdata.append('type', this.state.type)
            formdata.append('image', this.state.image)
            fetch('http://localhost:9000/products/addproduct', {
                method: 'post',
                body: formdata
            }).then(res => res.json())
                .then(prd => {
                    if (prd.productname) {
                        this.props.onRouteChange('products');
                    }
                })
                .catch(err => alert(`${err}`))
        } else {
            alert("Please fill in all the required fields.")
        }
    }





    render() {

        return (
            <div className='centerForm'>
                <Form>
                    <Form.Group>
                        <Form.Label>Product name</Form.Label>
                        <Form.Control type="text" onChange={this.onProductChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" onChange={this.onDescriptionChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" onChange={this.onPriceChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" onChange={this.onTypeChange}>
                            <option>phone</option>
                            <option>headphone</option>
                            <option>laptop</option>
                            <option>tablet</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.File label="Image" onChange={this.onImageChange} />
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={this.onSubmit}>
                        Add
                    </Button>
                </Form>

            </div>
        )
    }
}



export default AddProducts;