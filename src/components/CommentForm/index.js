import React, { Component } from 'react'
import './style.css'

class CommentAdd extends Component {
    state = {
        user: '',
        text: '',
        userValid: false,
        textValid: false
    }

    handleChange = ev => {
        const name = ev.target.name
        const value = ev.target.value

        this.setState({[name]: value}, () => { this.validateInput(name, value) });
    }

    validateInput(inputName, value){
        let userValid = this.state.userValid
        let textValid = this.state.textValid
        switch(inputName){
            case 'user':
                userValid = value.length >= 10
                break
            case 'text':
                textValid = value.length >= 20
                break
            default:
                break
        }

        this.setState({
            userValid: userValid,
            textValid: textValid
        })
    }

    render() {
        return (
            <div>
                <form action="#">
                    <h4>Comment add</h4>
                    <div>
                        <label>User:</label>
                        <input name="user" className = {this.state.userValid ? '' : 'is-error'} value = {this.state.user} onChange = {this.handleChange} />
                    </div>
                    <div>
                        <label>Text:</label>
                        <textarea name="text" className = {this.state.textValid ? '' : 'is-error'} value = {this.state.text} onChange = {this.handleChange} />
                    </div>
                    <button disabled = {(this.state.userValid && this.state.textValid) ? false : true} type="submit">Send</button>
                </form>
            </div>
        )
    }
}

export default CommentAdd