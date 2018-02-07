import React, { Component } from 'react'


class Chatbox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages : [
                'hey',
                'whats up',
                'bitvch'
            ],
            message:''
        }

        this.updateMessage = this.updateMessage.bind(this)
        this.sendMessage = this.sendMessage.bind(this)
    }

    renderChats() {
        return this.state.messages.map( (message, index) => {
            return <div className="chat-bubble"key={index}>{message}</div>
        })
    }

    sendMessage() {
        // trigger action send message 
        // reducer will automatically get result
        console.log('Send Message ' + this.state.message)
    }

    updateMessage(event) {
        let target = event.target
        let value = target.value
        let name = target.name

        this.setState({
            [name]: value
        })
        console.log(value)
    }

    render() {
        return (
            <div className="chat-box">
                {this.renderChats()}
                <input className="message-box" name="message" onChange={this.updateMessage} />
                <button className="send-message" onClick={this.sendMessage}>Send</button>
            </div>
        );
    }
}

export default Chatbox;
