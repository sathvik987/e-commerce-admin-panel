import React from 'react';
import { Card, Button } from 'react-bootstrap';


class MessageCard extends React.Component {



    done = () => {

        fetch('http://localhost:9000/contacts/messagestatus', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                date: this.props.date,
                email: this.props.email,
                status: 'Solved',
            })

        }).then(res => res.json())
            .then(msg => {
                this.props.refresh();
            })

    }

    render() {

        let d = new Date(this.props.date);

        return (
            <div>
                <Card>
                    <Card.Header><strong>Date: </strong> {d.toUTCString()}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <strong>Name:</strong> {this.props.name}
                        </Card.Text>
                        <Card.Text>
                            <strong>Email:</strong> {this.props.email}
                        </Card.Text>
                        <Card.Text>
                            <strong>Message:</strong> {this.props.message}
                        </Card.Text>
                        <Card.Text>
                            <strong>Status:</strong> {this.props.status}
                        </Card.Text>
                        <div>
                            {
                                this.props.status === "Solved" ? (
                                    <div></div>
                                ) : (
                                        <Button variant="primary" size='sm' onClick={this.done}>Done</Button>
                                    )
                            }
                        </div>
                    </Card.Body>
                </Card>
                <br />
            </div >
        )
    }
}

export default MessageCard;