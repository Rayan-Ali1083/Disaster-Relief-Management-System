const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require ('cors')


const db = mysql.createPool({

    host:'localhost',
    user: 'root',
    password: 'fast',
    database: 'dbtest'

});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post("/api/insert", (req,res)=>{

    const lname = req.body.lname
    const password = req.body.password

    const sqlInsert = 
    "Insert into logindet (username,pass) VALUES(?,?)";
    db.query(sqlInsert, [lname,password],(err,result)=>{
        console.log(result)
    });
});
app.listen(3001, () => {

    console.log("running on port 3001");

});