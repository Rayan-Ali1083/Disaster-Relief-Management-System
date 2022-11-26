const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require ('cors')
const bcrypt = require('bcrypt');
const { response } = require('express');
const cookieParser = require('cookie-parser')
const session = require('express-session')

const saltRounds = 10


const db = mysql.createPool({

    host:'localhost',
    user: 'root',
    password: 'fast123',
    database: 'drms'

});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post("/api/insert", (req,res)=>{

    //const lname = req.body.lname
    //const password = req.body.password
    const user = req.body.user
    
    const sqlRet = "Select * from logindet where username = ?";
    db.query(sqlRet,user.lname,(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result.length > 0){
            console.log(result)
            res.send({message:"Username already exists"});
        }
        else{
            bcrypt.hash(user.password,saltRounds, (err,hash)=>{

        if(err){
            console.log(err);
        }
        const sqlInsert = 
    "Insert into logindet (username,pass) VALUES(?,?)";
    db.query(sqlInsert, [user.lname,hash],(err,result)=>{
        console.log(err)
        res.send({message1:"Successfully Registered"})
    }); 
    })
        }
    })
   
   
});


app.post("/api/login", (req,res)=>{

    const username = req.body.username;
    const password = req.body.password;

    const sqlRet = "Select * from logindet where username = ?";
    db.query(sqlRet, username,(err,result)=>{
        if(err){
            res.send({err:err});
        }
        if(result.length > 0){
            bcrypt.compare(password,result[0].pass,(error,response)=>{
                if(response){
                    res.send(result)
                }else{
                    res.send({message:"Wrong username/password combination"})
                }
            })
        }else{
            res.send({message:"User doesn't exist"})
        }

    });
});

app.listen(3001, () => {

    console.log("running on port 3001");

});