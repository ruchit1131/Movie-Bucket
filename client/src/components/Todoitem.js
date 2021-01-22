import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle = () => {
        return {
            background : this.props.todo.completed ?  'rgb(220, 255, 217)' : 'rgb(255, 217, 217)',
            padding: '10px',
            borderBottom : '1px #ccc dotted',
            display: 'flex',
            border: '1px solid grey',
            borderRadius: '10px',
            margin: '2px'
        };
      
    };

    componentDidMount = (props) => {
        //console.log(this.props.todo);
      };

    render() {

        const {id, title} = this.props.todo;

        return (<>
            {   this.props.todo.bin === false && this.props.todo.favourites === false ? 
            <div style = {this.getStyle()} >
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <p onClick = {this.props.markComplete.bind(this, id)} style = {{ flex: '10', cursor: 'pointer', textDecoration: this.props.todo.completed ? 'line-through 1px #000' : 'none'}}>{title}</p>
                <div style ={{padding: '0', margin: '0'}}>
                <button style = {btnStyle} onClick={this.props.favTodo.bind(this, id)}><i className="fa fa-star"></i></button>
                <button style = {btnStyle} onClick={this.props.delTodo.bind(this, id, 0)}>Delete</button>
                </div>
            </div> 
            : '' }
        </>);
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


// PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    favTodo: PropTypes.func.isRequired,
  };

export default Todoitem
