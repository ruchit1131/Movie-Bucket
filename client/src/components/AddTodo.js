import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title : ""
    }

    changeValue = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div >
                <form style={{display: 'flex', minHeight: '50px', fontSize: '2em' }} onSubmit = {this.props.addTodo.bind(this, this.state.title, "", "")}>
                <input value = {this.state.title} style = {{flex: '10', padding:'5px', borderRadius: '5px'}} onChange={this.changeValue} type="text" name="title" placeholder="Add todo" />
                <button type="button" onClick = {this.props.addTodo.bind(this, this.state.title, "", "")} style = {btnStyle} >Add</button>
                </form>
            </div>
        )
    }
}

const btnStyle = 
{
    padding: '5px',
    fontWeight: 'bold',
    background: '#ddd',
    borderRadius: '5px',
    cursor: 'pointer',
    flex: '1'
}

export default AddTodo
