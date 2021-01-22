import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class SearchList extends Component {
    getStyle = () => {
        return {
           // background : this.props.todo.completed ?  'rgb(220, 255, 217)' : 'rgb(255, 217, 217)',
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

        const {imdbID, Title, Type, Poster, Year} = this.props.movie;

        return (<>
            <div style = {this.getStyle()} >
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                <img src = {Poster !== 'N/A' ? Poster : "https://dummyimage.com/50x70/000000/fff.jpg&text=N/A"} width="50" height="70" alt=""></img>
                <p onClick = {this.props.select_mov.bind(this, imdbID)} style = {{flex: '10', cursor: 'pointer'}}>&nbsp;&nbsp;{Title}&nbsp;({Type}) &nbsp;&nbsp;&nbsp;| Year: {Year}</p>
                <div style ={{padding: '0', margin: '0'}}>
                <button style = {btnStyle} onClick={this.props.addTodo.bind(this, Title, imdbID, 1)}><i className="fa fa-star"></i></button>
                <button style = {btnStyle} onClick={this.props.addTodo.bind(this, Title, imdbID, 0)}>Add</button>
                </div>
            </div> 
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
SearchList.propTypes = {
    movie: PropTypes.object.isRequired,
    select_mov: PropTypes.func.isRequired,
    addFav: PropTypes.func.isRequired,
  };

export default SearchList
