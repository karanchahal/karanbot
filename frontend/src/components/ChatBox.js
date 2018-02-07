import React, { Component } from 'react'
import axios from 'axios'

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

    addToChat(message) {
        messages = this.state.messages
        messages.push(message)
        this.setState({ messages })
    }

    extractMessage(res) {
        let body = res.data
        this.addToChat(body.message)
    }

    sendMessage() {
        // trigger action send message 
        // reducer will automatically get result
        let url = '/message'
        let options = {
            method: 'post',
            url: url,
            data: {message: this.state.message}
        }

        axios(options)
        .then(this.extractMessage)
        .catch((err) => console.log(err))
        
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
