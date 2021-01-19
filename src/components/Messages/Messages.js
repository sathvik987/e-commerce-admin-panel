import React from 'react';
import './Messages.css'
import MessageCard from './MessageCard';

class Messages extends React.Component {

    constructor() {
        super();
        this.state = {
            msgObj: ''
        };
    }


    componentDidMount() {
        fetch('https://arcane-sea-44247.herokuapp.com/contacts/messages')
            .then(response => response.json())
            .then(items => {
                items.sort((a, b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0));
                this.setState({ msgObj: items })
            }
            );
    }

    refresh = () => {
        fetch('https://arcane-sea-44247.herokuapp.com/contacts/messages')
            .then(response => response.json())
            .then(items => {
                items.sort((a, b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0));
                this.setState({ msgObj: items })
            }
            );

    }


    render() {

        return (
            <div className="centerM">
                <div>
                    <div>

                        {this.state.msgObj ? (
                            this.state.msgObj.map((msg) => {
                                return (
                                    <MessageCard
                                        key={msg.date}
                                        date={msg.date}
                                        message={msg.message}
                                        status={msg.status}
                                        email={msg.email}
                                        name={msg.name}
                                        refresh={this.refresh}
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



export default Messages;