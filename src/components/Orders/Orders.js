import React from 'react';
import './Orders.css'
import OrdersCard from './OrdersCard';


class Orders extends React.Component {

    constructor() {
        super();
        this.state = {
            ordersObj: ''
        };
    }


    componentDidMount() {
        fetch('http://localhost:9000/orders/orders')
            .then(response => response.json())
            .then(items => {
                items.sort((a, b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0));
                this.setState({ ordersObj: items })
            }
            );
    }

    refresh = () => {
        fetch('http://localhost:9000/orders/orders')
            .then(response => response.json())
            .then(items => {
                items.sort((a, b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0));
                this.setState({ ordersObj: items })
            }
            );

    }

    render() {

        return (
            <div className="centerO">

                <div>
                    <div>

                        {this.state.ordersObj ? (
                            this.state.ordersObj.map((order) => {
                                return (
                                    <OrdersCard
                                        key={order.date}
                                        date={order.date}
                                        products={order.productnames}
                                        price={order.price}
                                        address={order.address}
                                        status={order.status}
                                        refreshOrders={this.refresh}
                                        email={order.email}
                                        username={order.username}
                                    />)

                            })
                        ) : (
                                <div></div>
                            )

                        }
                    </div>


                </div>
            </div>
        )
    }
}



export default Orders;