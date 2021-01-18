import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import Searches from './components/Searches';
import Showmovie from './components/pages/Showmovie';
import AddTodo from './components/AddTodo';
import Bin from './components/pages/Bin';
import Favourites from './components/pages/Favourites';
import About from './components/pages/About';
import Search from './components/pages/Search';
import Header from './components/layout/Header';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import Youtube from './components/pages/Youtube'
import axios from 'axios';


class App extends React.Component{

state = {
  todos : [],
  movies: [],
  current_movie: "{}",
  display: 'none',
  alert_msg: '',
  trailer: ""

}

componentDidMount() {
    axios.get('http://localhost:3000/posts').then( res => {
      this.setState({todos : res.data});
    })
}


search = (title) => {

    axios.get('http://www.omdbapi.com/?apikey=e1c59ba&s=' + title).then( res => {
    //console.log(res.data.Search);
    this.setState({ movies : res.data.Search});
    //console.log(this.state.movies);

})
}




delTodo = (id) => {
  this.state.todos.map(todo => {
    if(todo.id === id)
        axios.put(`http://localhost:3000/posts/${id}`,{...todo , bin: !todo.bin})
        .then(() => {
    this.setState({
      todos: this.state.todos.map(todo => {

        if(todo.id === id)
            todo.bin = !todo.bin;
        return todo;
      })
    })
  })
      this.setState({display : 'block', alert_msg : 'Moved to Bin'});
      setTimeout(()=>{this.setState({display : 'none'});}, 1000)
  return todo;
})
}

markComplete = (id) => {
    this.state.todos.map(todo => {
      if(todo.id === id)
          axios.put(`http://localhost:3000/posts/${id}`,{...todo , completed: !todo.completed})
          .then(() => {
      this.setState({
        todos: this.state.todos.map(todo => {

          if(todo.id === id)
              todo.completed = !todo.completed;
          return todo;
        })
      })
    })
    return todo;
  })
}

restoreTodo = (id) => {
  this.state.todos.map(todo => {
    if(todo.id === id)
        axios.put(`http://localhost:3000/posts/${id}`,{...todo , bin: !todo.bin})
        .then(() => {
    this.setState({
      todos: this.state.todos.map(todo => {

        if(todo.id === id)
            todo.bin = !todo.bin;
        return todo;
      })
    })
  })
  this.setState({display : 'block', alert_msg : 'Restored to Movies Bucket'});
      setTimeout(()=>{this.setState({display : 'none'});}, 1000)
  return todo;
})
}

  favTodo = (id) => {
    this.state.todos.map(todo => {
      if(todo.id === id)
          axios.put(`http://localhost:3000/posts/${id}`,{...todo , favourites: !todo.favourites})
          .then(() => {
      this.setState({
        todos: this.state.todos.map(todo => {

          if(todo.id === id){
              if(todo.favourites === false)
              {
                todo.favourites = !todo.favourites;
                this.setState({display : 'block', alert_msg : 'Added to Favourites'});
                setTimeout(()=>{this.setState({display : 'none'});}, 1000)
              }
              else
              {
                todo.favourites = !todo.favourites;
                this.setState({display : 'block', alert_msg : 'Moved to Movies Bucket'});
                setTimeout(()=>{this.setState({display : 'none'});}, 1000)
              }
          }
          return todo;
        })
      })
    })
    
    return todo;
  })
}
  


deleteTodo = (id) => {
  axios.delete(`http://localhost:3000/posts/${id}`).then(() =>

  this.setState({
    todos: [...this.state.todos.filter(todo => todo.id !== id)] }

  ))
  this.setState({display : 'block', alert_msg : 'Deleted Permanently'});
      setTimeout(()=>{this.setState({display : 'none'});}, 1000)
 } 




addTodo = (title, id, is_fav) =>
  {
   
    let todo = {
      id: id ? id : uuidv4(),
      title: title,
      completed: false,
      bin: false,
      favourites: false
    }

    let find = 0;

    this.state.todos.forEach(todo => {
      if(todo.id === id)
        find++;
    })
    if(find === 0){
      if(is_fav === 1)
        {
          todo.favourites = true;
        }
    if(title !== ""){
    axios.post('http://localhost:3000/posts', todo).then(res => 
      this.setState({ todos: [...this.state.todos, res.data]}))

      if(is_fav === 1){
      this.setState({display : 'block', alert_msg : 'Added to Favourites'});
      setTimeout(()=>{this.setState({display : 'none'});}, 1000)
    }
      else{
        this.setState({display : 'block', alert_msg : 'Added to Movies Bucket'});
        setTimeout(()=>{this.setState({display : 'none'});}, 1000)
      }
    
    }
    }
    else
    {
      this.setState({display : 'block', alert_msg : 'Already in Movie Bucket or Favourites'});
      setTimeout(()=>{this.setState({display : 'none'});}, 1000)
    }
  }

  


 async select_mov (id)  {
    await axios.get("http://www.omdbapi.com/?apikey=e1c59ba&plot=full&i=" + id).then( res => {

     //console.log(this.state.current_movie);
     this.setState({current_movie : JSON.stringify(res.data)})
     let {Title, Actors, Type} = res.data;

     Youtube.get('/search', {
      params: {
          q: `${Title} ${Type} ${Actors.split(',')[0]} trailer`
      }
      }).then( (resp) => {

        this.setState({
          trailer: `https://www.youtube.com/embed/${resp.data.items[0].id.videoId}`
          })
          console.log(`${this.state.trailer}  ${Title} ${Type} ${Actors.split(',')[0]} trailer`);     
      })

     
  })
}

alert_style = () => {
  return {
      paddingLeft: '3px',
      paddingRight: '3px',
      marginRight: '10px',
      backgroundColor: '#bbb',
      fontWeight: 'bold',
      display : this.state.display,
      zIndex: 2,
      position: 'fixed',
      top: '0',
      borderRadius: '8px',
      opacity: '0.7',
      fontSize: '14px'
  };

};

  render = () =>{ 

  return(
      <div className="container">
        <Router>
        <Header />
        <div>
        <span  style = {this.alert_style()} onClick={this.alert_btn}>{this.state.alert_msg}</span>
        </div>

        <Route exact path="/" render={props => (
        <>
          <AddTodo addTodo = {this.addTodo.bind(this)}/>
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo.bind(this)}
            favTodo={this.favTodo.bind(this)}
          />
        </>
        )} />
        <Route path="/about" component = {About}/>

        <Route  path="/bin" render={props => (<>
        {this.state.todos.map((todo) => 
            <Bin  key={todo.id} restoreTodo = {this.restoreTodo} deleteTodo = {this.deleteTodo} markComplete = {this.markComplete} todo={todo} />)}
        </>
        )} />

        <Route  path="/favourites" render={props => (<>
        {this.state.todos.map((todo) => 
            <Favourites  key={todo.id}   markComplete = {this.markComplete} favTodo = {this.favTodo} deleteTodo = {this.deleteTodo} todo={todo} />)}
        </>
        )} />
        
        <Route path="/search" render={props => (<>
        
                <Search  search = {this.search.bind(this)} />
                <Searches addTodo = {this.addTodo.bind(this)} addFav = {this.addTodo.bind(this)} movies = {this.state.movies} select_mov = {this.select_mov.bind(this)} />
                 <Showmovie trailer= {this.state.trailer} addTodo = {this.addTodo.bind(this)} addFav = {this.addTodo.bind(this)}  current_movie = {this.state.current_movie}/> 
        
        </>)}/>

        </Router>
        </div>

  );
  }
}

export default App;

