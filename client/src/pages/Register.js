import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';





export class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        type: ""
    }


    changeValue = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

     

    render() {

        const responseGoogle = (response) => {
            
            this.setState({name: response.profileObj.name, email: response.profileObj.email, password: response.profileObj.familyName + response.profileObj.googleId + response.profileObj.email, password2: response.profileObj.familyName + response.profileObj.googleId + response.profileObj.email, type: 'google'}, ()=>{

                console.log(this.state);
                this.props.register(this.state);

            });
            
          }



        return (
            <form>  
                <div style={google_s}>
                <GoogleLogin 
                clientId="<client id>"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                />
                </div>
                <div style={form_s}>
                <h1>REGISTER</h1><br/>
                <input value = {this.state.name} style = {{margin: '0px', padding:'10px', borderRadius: '5px'}} onChange={this.changeValue} type="name" name="name" placeholder="Enter name" /><br/>
                <input value = {this.state.email} style = {{margin: '0px', padding:'10px', borderRadius: '5px'}} onChange={this.changeValue} type="email" name="email" placeholder="Enter email" /><br/>
                <input value = {this.state.password} style = {{margin: '0px', padding:'10px', borderRadius: '5px'}} onChange={this.changeValue} type="password" name="password" placeholder="Enter password" /><br/>
                <input value = {this.state.password2} style = {{margin: '0px', padding:'10px', borderRadius: '5px'}} onChange={this.changeValue} type="password" name="password2" placeholder="Confirm password" /><br/>
                <button type="button" onClick={this.props.register.bind(this, this.state)}style={btnStyle}>Register</button><br/>
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
    borderTop: '2px dotted black'

}

const google_s = {
    maxWidth: '400px',
    padding: '20px',
    display: 'flex',
    flexFlow: 'column wrap',
    margin: 'auto',
    alignItems: 'center',

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

export default Register
