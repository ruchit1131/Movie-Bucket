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
            <div style={{display: 'flex', minHeight: '50px', fontSize: '2em' }}>
                <input value = {this.state.title} style = {{flex: '10', padding:'5px', borderRadius: '5px'}} onChange={this.changeValue} type="text" name="title" placeholder="Add todo" />
                <button onClick = {this.props.addTodo.bind(this, this.state.title, "")} style = {btnStyle} >Add todo</button>
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
