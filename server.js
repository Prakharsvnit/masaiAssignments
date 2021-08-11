const express = require('express');
const users = require('./users.json');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    return res.send("Welcome to homepage");
})

app.get("/users",(req,res) => {
    return res.send({data:users})
})

app.post("/users",(req,res) => {
    users.push(req.body);
    return res.send("data added");
})

app.patch("/users/:id",(req,res) => {
    var x = Number(req.params.id);
    for(let i = 0; i <users.length; i++) {
        if(users[i].id === x) {
            var pos = i;
        }
    }
    users[pos] = req.body;
    return res.send("data patched");
})

app.delete("/users/:id",(req,res) => {
    var x = Number(req.params.id);
    for(let i = 0; i <users.length; i++) {
        if(users[i].id === x) {
            var pos = i;
        }
    }
    users.splice(pos, 1);
    return res.send("data deleted");
})

app.listen(5000,()=>{
    console.log("listening on port 5000");
})