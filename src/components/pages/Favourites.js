import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Favourites extends Component {

    getStyle = () => {
        return {
            background : this.props.todo.completed ?  'rgb(220, 255, 217)' : 'rgb(255, 217, 217)',
            padding: '10px',
            borderBottom : '1px #ccc dotted',
            display: 'flex',
            justifyContent: 'space-between'
        }
      
    }

    
    render() {
        const {id, title} = this.props.todo;
        return (<>
            {   this.props.todo.favourites === true ? 
            <div style = {this.getStyle()} >
                <p onClick = {this.props.markComplete.bind(this, id)} style = {{flex: '7', cursor: 'pointer', textDecoration: this.props.todo.completed ? 'line-through 1px #000' : 'none'}}>{title}</p>
                <div style ={{padding: '0', margin: '0', flex: '1'}}>
                <button  style = {btnStyle}  onClick={this.props.favTodo.bind(this, id)}>Unfavourite</button>
                <button style = {btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>Delete</button>
                </div>
            </div> : '' }
        </>)
    }
}


const btnStyle = 
{
    padding: '5px',
    fontWeight: 'bold',
    background: '#ddd',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '5px',
}


Favourites.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    favTodo: PropTypes.func.isRequired
  };
export default Favourites
