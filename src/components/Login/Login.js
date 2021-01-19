import React from 'react';
import './Login.css'
import { Form, Button } from 'react-bootstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        }
    }

    onEnter = (event) => {
        if (event.key === "Enter") {
            this.onSubmit();
        }
    }
    onUserNameChange = (event) => {
        this.setState({ userName: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }


    onSubmit = () => {
        if (this.state.password && this.state.userName) {
            fetch('https://arcane-sea-44247.herokuapp.com/users/adminLogin', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userName: this.state.userName,
                    password: this.state.password,
                })

            }).then(res => res.json())
                .then(user => {
                    if (String(user).includes('worng credentials') || String(user).includes('errorTypeError')) {
                        alert("Invalid user name or password")
                    }
                    if (user.userName) {
                        this.props.loadUser(user.userName)
                        this.props.onRouteChange('products');
                    }
                })
        } else {
            alert("Please fill in all the required fields.")
        }
    }


    render() {

        return (
            <div className="center_div">
                <Form>
                    <Form.Group controlId="formBasicUserName">
                        <Form.Label>User name </Form.Label>
                        <Form.Control type="text" placeholder="Enter user name" onChange={this.onUserNameChange} onKeyPress={this.onEnter} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.onPasswordChange} onKeyPress={this.onEnter} />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={this.onSubmit}>
                        Login
                </Button>
                </Form>
            </div>
        )
    }
}



export default Login;