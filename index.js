const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const port = 3000


app.get('/', (req, res)=>{
    res.send('I am excited to learn node and express')
});
/* all users load */
const users =[
    {id:0, name:'sabana', email:'sabana@gmail.com', phone:'0177885612'},
    {id:1, name:'sabana', email:'sabana@gmail.com', phone:'0177885612'},
    {id:2, name:'sabana', email:'sabana@gmail.com', phone:'0177885612'},
    {id:3, name:'sabana', email:'sabana@gmail.com', phone:'0177885612'},
    {id:4, name:'sabana', email:'sabana@gmail.com', phone:'0177885612'}
]
/* use search quary {/users?search=data related} */
app.get('/users', (req, res) =>{
    const search = req.query.search;
    if(search){
      const result =users.filter(user=>user.name.toLocaleLowerCase().includes(search));
      res.send(result);
    }
    else{
        res.send(users);
    }
   
})
/*  all users load  */


/* app.method */
app.post('/users',(req,res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hetting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// all user theke specifics user load 
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})
// all user theke specifics user load 

/* spacifics route */
app.get('/rajshahi',(req,res)=>{
    res.send('The city of magno')
})
app.get('/rajshahi/dhaka/khulna',(req,res)=>{
    res.send('rajshahi te amar basha, dhakai amar second basha, r ami khulnai ghurte jabo');
})
/* spacifics route */

app.listen(port, () => {
    console.log('Exmaple app listening port', port)
  })