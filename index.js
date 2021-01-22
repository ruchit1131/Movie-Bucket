const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const path = require('path');
const PORT = process.env.PORT || 5000;
const db = 'mongodb+srv://ruch:ruch@movie-database.9t2ve.mongodb.net/movie-database?retryWrites=true&w=majority';
const User = require('./models/User')


// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));



app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })




app.post("/post-todos", async (req, res) => {
  let {id, todo} = req.body;
 
  let user = await User.findById(id);
  user.todos.push(todo);
  user.save();
  res.send("done");
  console.log(id);

})

app.get("/get-todos", async (req, res) => {
  let id = req.query.id;
  console.log(req.query);
  let user = await User.findById(id);
  res.json(user.todos);
})

app.get("/mark-todos", async (req, res) => {
  let user_id = req.query.user_id;
  let id = req.query.id;

  console.log(req.query);
  let user = await User.findById(user_id);
  user.todos.map(todo => {
    if(todo.id === id)
        todo.completed = !todo.completed;
    return todo;
  })

  user.save();
  res.send("done");

})

app.get("/del-todos", async (req, res) => {
  let user_id = req.query.user_id;
  let id = req.query.id;

  console.log(req.query);
  let user = await User.findById(user_id);
  user.todos.map(todo => {
    if(todo.id === id)
        todo.bin = !todo.bin;
    return todo;
  })
  user.save();
  res.send("done");

})

app.get("/restore-todos", async (req, res) => {
  let user_id = req.query.user_id;
  let id = req.query.id;

  console.log(req.query);
  let user = await User.findById(user_id);
  user.todos.map(todo => {
    if(todo.id === id)
        todo.bin = !todo.bin;
    return todo;
  })
  user.save();
  res.send("done");

})

app.get("/fav-todos", async (req, res) => {
  let user_id = req.query.user_id;
  let id = req.query.id;

  console.log(req.query);
  let user = await User.findById(user_id);
  user.todos.map(todo => {
    if(todo.id === id)
        todo.favourites = !todo.favourites;
    return todo;
  })
  user.save();
  res.send("done");

})


app.get("/delete-todos", async (req, res) => {
  let user_id = req.query.user_id;
  let id = req.query.id;

  console.log(req.query);
  let user = await User.findById(user_id);

  user.todos =  [...user.todos.filter(todo => todo.id !== id)] 
  user.todos.map(todo => {
    if(todo.id === id)
        todo.favourites = !todo.favourites;
    return todo;
  })
  user.save();
  res.send("done");

})



app.post("/register",  (req, res) => {

  const { name, email, password, type} = req.body;

          if(type === "google"){
            User.findOne({email : email}).then( (user) => {
              if(!user) {
                  bcrypt.hash(password, 10, (err, hash) => {
            
                    if(err) throw err;
                    // Now we can store the password hash in db.
                    User.create({name : name, email: email, password: hash, todos: []}, ()=>{  
                      User.findOne({email: email}).then((user)=>{
                        res.json({msg : 'google', user : user});
                      })
                    })
            })
          }
          else{
           // console.log(user);
            res.json({msg : 'google', user : user});
          }
        })
      }
else{

  User.findOne({email : email}).then( (user) => {
    if(user) {
      res.json({msg : "already_exists"})
    }
    else {
      bcrypt.hash(password, 10, (err, hash) => {

        if(err) throw err;
        // Now we can store the password hash in db.
        User.create({name : name, email: email, password: hash, todos: []})
      });
    }
  })}
});



app.post("/login",  (req, res) => {
  const { email, password} = req.body;

  console.log(req.body);

  User.findOne({email : email}).then( (user) => {
    // res.json(user)
    // console.log(user);
    if(!user) {
      res.json({msg: "DNE"});
    }
    else if(bcrypt.compareSync(password , user.password)) {
      res.json({msg:"" , user: user});
      //console.log(user);
     } else {
      res.json({msg: "deny"});
     }

    
  })
   
});





mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => {
    console.log('MongoDB Connected')
    app.listen(PORT, () => console.log(`App is running`));
  })
  .catch(err => console.log(err));

