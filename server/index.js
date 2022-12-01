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
  
    const user = req.body.user
    
    const sqlRet = "Select Username from users where Username = ?";
    db.query(sqlRet,user.user_name,(err,result)=>{
        console.log(result.data)
        if(err){
            console.log(err)
        }
        if(result.length > 0){
            console.log(result.data)
            res.send({message:"Username already exists"});
        }
        else{
            const SqlI = "Select org_name,org_contact from organizations where org_name = ? or org_contact = ?"
            db.query(SqlI,[user.org_name,user.org_email],(err,result)=>{
                if(result.length > 0){
                    res.send({message:"Incorrect Details"})
                }
                else{
           bcrypt.hash(user.pass,saltRounds, (err,hash)=>{

        if(err){
            console.log(err);
        }
        var orgCategory = ""
        let lastPromise = new Promise (function(Res,Rej){ const SqlCat = "Select org_category_id from org_category where org_type =? "
        db.query(SqlCat,user.org_cate,(err,result)=>{
            let resultx = JSON.parse(JSON.stringify(result));
                orgCategory = result[0].org_category_id
                console.log(orgCategory)
                Res(result)
        })})
      lastPromise.then(
        function (){
        var holder =  ""
        let myPromise = new Promise (function(myResolve,myReject){

       const sqldet = "Insert into organizations (org_name,org_category_id,org_contact) VALUES (?,?,?)"
        db.query(sqldet,[user.org_name,orgCategory,user.email],(err,result)=>{
            if(err){
                myReject("error")
                console.log(err)
            }else{

                myResolve("ok")
            }
            
           
        })

        })

       myPromise.then(
        
       function() {  let data = new Promise((resolve,reject)=>{
        
        const sqlUdet = "Select Org_id from organizations where Org_name = ?";
        db.query(sqlUdet,user.org_name,(err,result)=>{
            if(err){
                console.log("ERR during SEL" + err)
                reject(result)
            }else{
                 let resultx = JSON.parse(JSON.stringify(result));
                 holder = result[0].Org_id
                 console.log(holder)
                 resolve(result)
                // resultx.forEach((v) => console.log(v));
                // console.log(resultx)
              
            }
         
        })
       })
    
           data.then(
            function(){
                  const sqlInsert = 
                "Insert into users (Username,password,Org_id) VALUES(?,?,?)";
                db.query(sqlInsert, [user.user_name,hash,holder],(err,result)=>{
                    console.log(err)
                    res.send({message1:"Successfully Registered"})}
           )
                })}

       )}
      )
       
       
       
        
    })

                }
            })
 
        }
    })
   
   
});

app.get("/api/orginfo",(req,res)=>{

    const sqlget = 
    "Select o.org_id,o.org_name,o.org_status, o.org_category_id,r.program_name from relief_program r, organizations o, relief_providers as rp where o.org_id = rp.org_id and rp.program_id = r.program_id";
    db.query(sqlget, (err,result)=>{
        console.log(err)
        res.send(result)
    }); 
})

app.get("/api/remOrg",(req,res)=>{
const status = "ACTIVE"
const admin = "ORG_0001"
    const sqlget = 
    "Select o.org_id,o.org_name,o.org_status, o.org_category_id,r.program_name from relief_program r, organizations o, relief_providers as rp where o.org_id = rp.org_id or rp.program_id = r.program_id and o.Org_status = ? and o.Org_id != ?";
    db.query(sqlget,[status,admin], (err,result)=>{
        console.log(err)
        res.send(result)
    }); 
})


app.get("/api/disasterinfo",(req,res)=>{
    const sqlget = 
    "Select d.disaster_id,d.disaster_name,d.disaster_date,dc.disaster_type from disaster d, disaster_category dc where d.disaster_type_id = dc.disaster_type_id";
    db.query(sqlget, (err,result)=>{
        console.log(err)
        res.send(result)
    }); 

})

app.get("/api/reliefinfo",(req,res)=>{

    const sqlget = 
    "Select r.program_id,r.program_name,r.program_status,d.disaster_name,r.start_date,r.end_date from relief_program r, disaster d where r.disaster_id = d.disaster_id";
    db.query(sqlget, (err,result)=>{
        console.log(err)
        res.send(result)
    }); 

})
app.get("/api/getpending",(req,res)=>{

    const hold = "PENDING";
    const sqlget = 
    "Select org_id,org_name,org_status,org_contact, org_category_id from organizations where org_status=?";
    db.query(sqlget,hold, (err,result)=>{
        console.log(err)
        res.send(result)
    }); 
})

app.get("/api/productsinfo",(req,res)=>{

    const sqlget = 
    "Select Product_id,Product_name,Product_category from product;";
    db.query(sqlget, (err,result)=>{
        console.log(err)
        res.send(result)
    });     
})

app.post("/api/approvePending",(req,res)=>{
    const user = req.body.user
    const hold = "ACTIVE"
    const SqlU = "Update organizations set org_status = ? where org_id = ?"

    db.query(SqlU,[hold,user],(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"Status Updated"})
        }
    })
})
app.post("/api/addProd",(req,res)=>{
    const user = req.body.prod
    const hold = "ACTIVE"
    const SqlU = "Insert into product (Product_name,Product_category) VALUES (?,?)"

    db.query(SqlU,[user.product_name,user.product_cate],(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"Product Added"})
        }
    })
})

app.post("/api/remproducts",(req,res)=>{
    const user = req.body.user
    const SqlU = "Delete from product where Product_id = ?"

    db.query(SqlU,user,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"Product Removed"})
        }
    })
})
app.post("/api/declinePending",(req,res)=>{
    const user = req.body.user
    const SqlU = "Delete from organizations where org_id = ?"

    db.query(SqlU,user,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"Organization Removed"})
        }
    })
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