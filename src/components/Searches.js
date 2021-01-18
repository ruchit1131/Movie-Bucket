import React, { Component } from 'react';
import Searchlist from './SearchList';
import PropTypes from 'prop-types';

class Searches extends Component {
  render() {
    return (<>

      <details open>
      <summary style={summary_s}>Movies:</summary>
      {typeof this.props.movies !== 'undefined' ? this.props.movies.map((movie) => (
      <Searchlist key={movie.imdbID} movie={movie} addFav = {this.props.addTodo} addTodo = {this.props.addTodo} select_mov = {this.props.select_mov} />
    )): ''}
    </details>
    </>)
  }
}

const summary_s = {
  padding: '4px',
  backgroundColor: '#eeeeee',
  border: 'none',
  boxShadow:'1px 1px 2px #bbbbbb',
  cursor: 'pointer',
  display: 'block',
}

// PropTypes
Searches.propTypes = {
 // movies: PropTypes.array.isRequired,
  select_mov: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  addFav: PropTypes.func.isRequired,
}

export default Searches;