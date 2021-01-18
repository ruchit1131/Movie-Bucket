import React, { Component } from 'react';



export class Search extends Component {

    state = {
        title : "",
    }

    changeValue = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <div style={{display: 'flex', minHeight: '50px', fontSize: '2em' }}>
                <input value = {this.state.title} style = {{flex: '10', padding:'5px', borderRadius: '5px'}} onChange={this.changeValue} type="text" name="title" placeholder="Enter movie name" />  
                <button onClick={this.props.search.bind(this, this.state.title)} style = {btnStyle} >Search</button>
            </div>
            <div id="list"></div>
            </div>
        )
    }
}

const btnStyle = 
{
    fontSize: '20px',
    fontWeight: 'bold',
    background: '#ddd',
    borderRadius: '5px',
    cursor: 'pointer',
    flex: '1'
}

export default Search
