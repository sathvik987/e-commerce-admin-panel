import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/NavBar/NavBar'
import Login from './components/Login/Login'
import Orders from './components/Orders/Orders'
import Products from './components/Products/Products'
import AddProducts from './components/Products/AddProduct'
import Messages from './components/Messages/Messages'


class App extends Component {

  constructor() {
    super();
    this.state = {
      user: localStorage.getItem('admin') || "",
      route: ''
    };
  }

  componentDidMount() {
    if (this.state.user) {
      this.setState({ route: 'products' })
    } else {
      this.setState({ route: 'login' })
    }
  }

  loadUser = (user) => {
    this.setState({ user: user })
    localStorage.setItem('admin', user)

  }

  signOut = () => {
    this.setState({ user: "", route: 'login' })
    localStorage.removeItem('admin');
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  render() {

    let display;
    let nav;

    if (this.state.route === 'login') {
      display = <Login onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
    } else if (this.state.route === 'products') {
      nav = <Navigation onRouteChange={this.onRouteChange} signOut={this.signOut} />
      display = <Products onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'orders') {
      nav = <Navigation onRouteChange={this.onRouteChange} signOut={this.signOut} />
      display = <Orders />
    } else if (this.state.route === 'messages') {
      nav = <Navigation onRouteChange={this.onRouteChange} signOut={this.signOut} />
      display = <Messages />
    } else if (this.state.route === 'addproducts') {
      nav = <Navigation onRouteChange={this.onRouteChange} signOut={this.signOut} />
      display = <AddProducts onRouteChange={this.onRouteChange} />
    }

    return (
      <div className="App">
        {nav}
        {display}
      </div>
    );
  }
}

export default App;
