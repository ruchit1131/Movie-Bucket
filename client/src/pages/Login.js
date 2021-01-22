import React, { Component } from 'react'

export class Login extends Component {
    state = {
        email: "",
        password: "",
    }

    changeValue = (e) => {
        this.setState({[e.target.name]: e.target.value})
        console.log('value.change')
    }

    render() {
        return (
            <form>
                <div style={form_s}>
                <h1>LOGIN</h1><br/>
                <input value = {this.state.email} style = {{margin: '0px', padding:'10px', borderRadius: '5px'}} onChange={this.changeValue} type="email" name="email" placeholder="Enter email" /><br/>
                <input value = {this.state.password} style = {{margin: '0px', padding:'10px', borderRadius: '5px'}} onChange={this.changeValue} type="password" name="password" placeholder="Enter password" /><br/>
                <button type="button" onClick={this.props.login.bind(this, this.state)}style={btnStyle}>Login</button>
            </div>
            </form>
        )
    }
}

const form_s = {
    maxWidth: '400px',
    padding: '20px',
    display: 'flex',
    flexFlow: 'column wrap',
    margin: 'auto',
    alignItems: 'center',
    borderBottom: '2px dotted black'
    
}


const btnStyle = 
{
    fontWeight: 'bold',
    background: '#ddd',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px',
    padding: '5px',
    fontSize: '14px'
}

export default Login
