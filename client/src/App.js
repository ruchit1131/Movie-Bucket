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
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import Login from './pages/Login';




class App extends React.Component{

state = {
  todos : [],
  movies: [],
  current_movie: "{}",
  display: 'none',
  alert_msg: '',
  trailer: "",
  id: '',
  name: ''

}

componentDidMount() {
    var id = localStorage.getItem('id');
    var name = localStorage.getItem('name');
    this.setState({id:id, name: name}, ()=>{
  //  console.log(this.state.id);
    if(id){
      axios.get('/get-todos', {
        params: {
          id: this.state.id
        }
      }).then( res => {
        //console.log( typeof res.data);
       // console.log(this.state.name);
        this.setState({todos : res.data})
      })
    }
    })    
}




login = (val) => {

  const {email, password} = val;
  //eslint-disable-next-line
  if ((/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/).test(email) === false) 
  {
  this.setState({display : 'block', alert_msg : "Enter valid email"});
  setTimeout(()=>{this.setState({display : 'none'});}, 2000)
  }
  else{
  if(password.length < 6)
  {
      this.setState({display : 'block', alert_msg : 'Password must be at least 6 characters'});
      setTimeout(()=>{this.setState({display : 'none'});}, 2000)
  }else{//Form Data Correct
          axios.post("/login", val).then((res) =>{
            console.log(res.data.msg);
          if(res.data.msg === 'DNE')
          {
              this.setState({alert_msg : 'User does not exist', display: 'block'});
              setTimeout(()=>{this.setState({display : 'none'});}, 3000)
          }
          else if(res.data.msg === "deny")
          {
              this.setState({display : 'block', alert_msg : 'Incorrect Password!'});
              setTimeout(()=>{this.setState({display : 'none'});}, 2000);
          }
          else {//Successful Login
            this.setState({id: res.data.user._id, name: res.data.user.name})
            localStorage.setItem('id', res.data.user._id);
            localStorage.setItem('name', res.data.user.name);
            console.log(res.data.user);
            window.location.replace('/');
          }
          }).catch(err => console.log(err))
  }
  
  }
  }
  
  
  wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

  
  register = (val) => {

  //console.log("In register")
  const { name, email, password, password2 } = val;
  
  
  if (!name || !email || !password || !password2) {
  this.setState({alert_msg : 'Please enter all fields', display: 'block'});
  setTimeout(()=>{this.setState({display : 'none'});}, 3000)
  }else{
  
  var errors = [];
  
  if (password !== password2) {
  errors.push({ msg: 'Passwords do not match' });
  }
  
  if (password.length < 6) {
  errors.push({ msg: 'Password must be at least 6 characters' });
  }
  //eslint-disable-next-line
  if ((/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/).test(email) === false) 
  {
  errors.push({ msg: 'Invalid email address' });
  }
  
  var err_msg = ""; 
  
  errors.forEach(error => {
  err_msg += error.msg + ", "
  })
  
  err_msg = err_msg.substr(0, err_msg.length - 2);
  
  if(errors.length > 0){
  
  this.setState({display : 'block', alert_msg : err_msg});
  
  setTimeout(()=>{this.setState({display : 'none'});}, 3000)
  
  }else{ //Form Data Correct
  
      axios.post("/register", val).then( (res) =>{
          if(res.data.msg === 'already_exists')
          {
          this.setState({alert_msg : 'User already exists', display: 'block'});
          setTimeout(()=>{this.setState({display : 'none'});}, 3000)
          }
          else if(res.data.msg === 'google'){
              console.log(res.data)
              axios.post("/login", {email : res.data.user.email, password : password}).then((resp) =>{
              this.setState({id: resp.data.user._id, name: resp.data.user.name})
              localStorage.setItem('id', resp.data.user._id);
              localStorage.setItem('name', resp.data.user.name);
              console.log(resp.data);
              window.location.replace('/');
              this.setState({alert_msg : 'Successfully Registered!', display: 'block'});
          setTimeout(()=>{this.setState({display : 'none'});}, 3000)
            })
          }
          else
          {//Success
            this.setState({alert_msg : 'Successfully Registered!', display: 'block'});
            setTimeout(()=>{this.setState({display : 'none'});}, 3000)
          }
          }).catch(err => console.log(err))
  }
  }
}
  
  
  logout = () => {
  
  //console.log('Logout');

  this.setState({todos : [],
    movies: [],
    current_movie: "{}",
    display: 'none',
    alert_msg: '',
    trailer: "",
    name: ''}, ()=>{

      localStorage.clear();
      this.setState({display : 'block', alert_msg : 'Logged Out'});
      setTimeout(()=>{this.setState({display : 'none'});}, 1000);
  })

  setTimeout(()=>{ this.setState({id : ''})
  }, 1500);

  window.location.replace('/');
}













search = (title) => {

    axios.get('https://www.omdbapi.com/?apikey=<apikey>&s=' + title).then( res => {
    //console.log(res.data.Search);
    this.setState({ movies : res.data.Search});
    //console.log(this.state.movies);

})
}


delTodo = (id) => {
  this.state.todos.map(todo => {
    if(todo.id === id)
        axios.get('/del-todos',{
          params: {
            user_id: this.state.id,
            id : id
          }
        })
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
      axios.get('/mark-todos', {
        params: {
          user_id: this.state.id,
          id : id
        }
      })
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
    axios.get('/restore-todos', {
      params: {
        user_id: this.state.id,
        id : id
      }
    })
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
      axios.get('/fav-todos', {
        params: {
          user_id: this.state.id,
          id : id
        }
      })
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
  axios.get('/delete-todos', {
    params: {
      user_id: this.state.id,
      id : id
    }
  })
  .then(() =>

  this.setState({
    todos: [...this.state.todos.filter(todo => todo.id !== id)] }

  ))
  this.setState({display : 'block', alert_msg : 'Deleted Permanently'});
      setTimeout(()=>{this.setState({display : 'none'});}, 1000)
 } 




 addTodo = (title, id, is_fav) =>
 {
   let todo = {
     id : id ? id : uuidv4(),
     title: title,
     completed: false,
     bin: false,
     favourites: false
   }

   if(is_fav === 1)
    {
      todo.favourites = true;
    }
   let find = 0;

   this.state.todos.forEach(todo => {
     if(todo.id === id)
       find++;
   })

   if(find === 0 && title !== '')
   {
    this.setState({ todos: [...this.state.todos, todo]})
   }

   if(find === 0){
   if(title !== ""){
     console.log(title);
     axios.post('/post-todos', {id: this.state.id, todo: todo}).then(res => {
     console.log(res.data);})

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
    await axios.get("https://www.omdbapi.com/?apikey=<apikey>&plot=full&i=" + id).then( res => {

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
      fontSize: '14px'
  };

};

  render = () =>{ 

    const WelcomeRoute = () => {
      if(this.state.id)
        return (<></>)
        else return(<>
        
        <Welcome />
          <div>
              <span  style = {this.alert_style()} onClick={this.alert_btn}>{this.state.alert_msg}</span>
          </div>
          <Route exact path="/">
                        <Login login = {this.login} />
          </Route>

          <Route exact path="/">
                        <Register register = {this.register} />
          </Route>

          </>)
    }


    const PrivateRoute = () => {
       if (this.state.id)
         return (<>
            <div className="container">
        <Header />
        <div>
        <span  style = {this.alert_style()} onClick={this.alert_btn}>{this.state.alert_msg}</span>
        </div>
        <button style = {{padding: '1px', fontSize:'14px',fontWeight:'bold', background: '#bbb', borderRadius:'10px', position: 'absolute', top: '22px', left: '5px'}}type="button" onClick= {this.logout} >Logout</button><h5 style = {{margin: '0px', color: '#bbb',fontSize: '14px', paddingTop: '0px',borderRadius:'10px', position: 'absolute', top: '0px', left: '5px'}}>{this.state.name}</h5>
        <Route exact path="/" render={props => (
        <>
          <AddTodo addTodo = {this.addTodo}/>
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

   
        </div>
         </>)

       else return <WelcomeRoute />
     }

  return(

    <Router>
      <Route path="/">
    <PrivateRoute />
    </Route>
    </Router>
  );
  }
}

export default App;

