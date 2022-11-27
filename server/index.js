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
    password: 'fast',
    database: 'dbtest'

});



app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post("/api/signup", (req,res)=>{
  
    //const lname = req.body.lname
    //const password = req.body.password
    const user = req.body.user
    
    const sqlRet = "Select * from users where username = ?";
    db.query(sqlRet,user.user_name,(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result.length > 0){
            console.log(result)
            res.send({message:"Username already exists"});
        }
        else{
            bcrypt.hash(user.pass,saltRounds, (err,hash)=>{

        if(err){
            console.log(err);
        }

        const sqldet = "Insert into organizations (org_name,org_category_id,org_contact) VALUES (?,?,?)"
        db.query(sqldet,[user.org_name,user.cate,user.email],(err,result)=>{
            console.log(err)
        })
        var holder = ""
        const sqlUdet = "Select Org_id from organizations where org_name = ?";
        db.query(sqlUdet,user.org_name,(err,result)=>{
            holder = result.data
            console.log(err)
        })

        const sqlInsert = 
    "Insert into users (Username,password,Org_id) VALUES(?,?,?)";
    db.query(sqlInsert, [user.user_name,hash,holder],(err,result)=>{
        console.log(err)
        res.send({message1:"Successfully Registered"})
    }); 
    })
        }
    })
   
   
});

app.get("/api/orginfo",(req,res)=>{

    const sqlget = 
    "Select username from logindet";
    db.query(sqlget, (err,result)=>{
        console.log(err)
        res.send(result)
    }); 
})

app.get("/api/getpending",(req,res)=>{

    const hold = "Pending";
    const sqlget = 
    "Select username from logindet where status=?";
    db.query(sqlget,hold, (err,result)=>{
        console.log(err)
        res.send(result)
    }); 
})


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