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
    database: 'drwms'

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

                        if (err) {
                            console.log(err);
                        }
                        var orgCategory = ""
                        let lastPromise = new Promise(function (Res, Rej) {
                            const SqlCat = "Select org_category_id from org_category where org_type =? "
                            db.query(SqlCat, user.org_cate, (err, result) => {
                                let resultx = JSON.parse(JSON.stringify(result));
                                console.log(result)
                                orgCategory = result[0].org_category_id
                                Res(result)
                            })
                        })
                        lastPromise.then(
                            function () {
                                var holder = ""
                                let myPromise = new Promise(function (myResolve, myReject) {

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
                    if(err){

                        console.log(err)
                    }else{
                        res.send({message1:"Successfully Registered"})}
                    }
                    
                    
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

app.post("/api/orgdetails",(req,res)=>{

    const user = req.body.dash
    let user1= JSON.parse(user)
    const sqlget = 
    "Select o.org_id,o.org_name,o.org_status, oc.org_type,o.org_contact from organizations o, org_category oc where o.org_category_id = oc.org_category_id and org_id = ?";
    db.query(sqlget,user1, (err,result)=>{
        console.log(err)
        console.log(result)
        res.send(result)
    }); 
})


app.get("/api/remOrg",(req,res)=>{
const status = "ACTIVE"
const admin = "ORG_0001"
    const sqlget = 
    "Select org_id,org_name,org_status, org_category_id from organizations  where Org_status = ? and Org_id != ?";
    db.query(sqlget,[status,admin], (err,result)=>{
        console.log(err)
        res.send(result)
    }); 
})

app.get("/api/remDis", (req, res) => {
    const status = "ACTIVE"
    const admin = "ORG_0001"
    const sqlget =
    "select d.Disaster_id,d.Disaster_name,d.Disaster_date,dc.Disaster_type from disaster d, disaster_category dc where d.Disaster_type_id=dc.Disaster_type_id;";
    db.query(sqlget, (err, result) => {
        console.log(err)
        res.send(result)
    });
})

app.post("/api/removingdisaster", (req, res) => {
    const disast = req.body.disas
    const SqlU = "Delete from disaster where Disaster_id = ?"

    db.query(SqlU, disast, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send({ message: "Disaster Removed" })
        }
    })
})

app.get("/api/disasterinfo",(req,res)=>{
    const sqlget = 
    "Select d.disaster_id,d.disaster_name,d.disaster_date,dc.disaster_type from disaster d, disaster_category dc where d.disaster_type_id = dc.disaster_type_id";
    db.query(sqlget, (err,result)=>{
        console.log(err)
        console.log(result)
        res.send(result)
    }); 

})
app.get("/api/disastercateg",(req,res)=>{
    const sqlget = 
    "Select disaster_type from disaster_category";
    db.query(sqlget, (err,result)=>{
        console.log(err)
        res.send(result)
    }); 

})


app.get("/api/orgtype",(req,res)=>{

    const hold = "ORG_CAT_001"
    const sqlget = 
    "Select org_type from org_category where org_category_id != ?";
    db.query(sqlget,hold, (err,result)=>{
        console.log(err)
        console.log(result)
        res.send(result)
    }); 

})
app.get("/api/disastername",(req,res)=>{
    const sqlget = 
    "Select disaster_name from disaster";
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

app.get("/api/disastername", (req, res) => {
    const sqlget =
        "Select disaster_name from disaster";
    db.query(sqlget, (err, result) => {
        console.log(err)
        res.send(result)
    });

})

app.get("/api/reliefinfo", (req, res) => {

    const sqlget =
        "Select r.program_id,r.program_name,r.program_status,d.disaster_name,r.start_date,r.end_date from relief_program r, disaster d where r.disaster_id = d.disaster_id";
    db.query(sqlget, (err, result) => {
        console.log(err)
        res.send(result)
    });

})

app.post("/api/dashinfo", (req, res) => {
     
    const user = req.body.dash
    const sqlget =
        "Select r.program_id,r.program_name,r.program_status,r.start_date,pc.p_commitment_id,o.org_name,p.product_name,dl.location_name,pc.comm_qty,pc.comm_date,pc.exp_delivery_date,pc.status,d.disaster_name from relief_program r,disaster d,disaster_locations dl,product_committment pc,organizations o,product p where r.program_id = ? and r.program_id = pc.program_id and pc.product_id = p.product_id and pc.disaster_location_id = dl.disaster_location_id and r.disaster_id = d.disaster_id and pc.org_id = o.org_id "
    db.query(sqlget, user,(err, result) => {
        if(err){
         console.log(err)   
         console.log(result)
        }
        else{
            res.send(result)
        }
        
    });

})


app.post("/api/dislocdashinfo", (req, res) => {
     
    const user = req.body.dash
    const sqlget =
    "select dl.Disaster_location_id,dl.Location_name,c.City_name,p.Province_name from disaster_locations dl,cities c,provinces p where dl.Disaster_id=? and dl.city_id=c.City_id and c.Province_id=p.Province_id"
    db.query(sqlget, user,(err, result) => {
        if(err){
         console.log(err)   
         console.log(result)
        }
        else{
            res.send(result)
        }
        
    });

})

app.post("/api/dislocations", (req, res) => {
     
    const user = req.body.dash
    const sqlget =
    "select dl.Location_name from disaster_locations dl,relief_program rp where rp.Program_id=? and rp.Disaster_id=dl.Disaster_id"
    db.query(sqlget, user,(err, result) => {
        if(err){
         console.log(err)   
         console.log(result)
        }
        else{
            res.send(result)
        }
        
    });

})

app.post("/api/dashmoreinfo", (req, res) => {
     
    const user = req.body.dash
    const sqlget =
        "Select pr.p_requirement_id, p.product_name, dl.location_name, pr.req_qty, pr.request_date from product_requirements pr,disaster_locations dl,product p where pr.program_id = ? and pr.disaster_location_id = dl.disaster_location_id and pr.product_id = p.product_id"
    db.query(sqlget, user,(err, result) => {
        if(err){
         console.log(err)   
         console.log(result)
        }
        else{
            res.send(result)
        }
        
    });

})

app.post("/api/dashfulinfo", (req, res) => {
     
    const user = req.body.dash
    const sqlget =
        "Select pf.qty_fullfilled,pf.fullfilled_date,pc.comm_qty,p.product_name,o.org_name from product_fullfillment pf,product_committment pc,product p,organizations o where pf.p_commitment_id = pc.p_commitment_id and pc.program_id = ? and pc.product_id = p.product_id and pc.org_id = o.org_id"
    db.query(sqlget, user,(err, result) => {
        if(err){
         console.log(err)   
         console.log(result)
        }
        else{
            res.send(result)
        }
        
    });

})
app.get("/api/getpending", (req, res) => {

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

app.post("/api/addDisaster",(req,res)=>{

    const u = req.body.dis
    var hol =  ""

let dPromise = new Promise (function(Resolve,Reject){

  const SqlD = "Select disaster_type_id from disaster_category where disaster_type = ?"
        db.query(SqlD,u.dis_type,(err,result)=>{
            let resultx = JSON.parse(JSON.stringify(result))
            console.log(result)
            hol = result[0].disaster_type_id
            Resolve("ok")
            
        })



})
      dPromise.then(

        function() { 
             SqlR = "Insert into disaster (disaster_name,disaster_date,disaster_type_id) VALUES (?,?,?)"
            db.query(SqlR,[u.dis_name,u.date,hol],(err,result)=>{
                if(err){
                    console.log(err)
                }
                res.send({message:"Disaster Added"})
            })}
      )
   
          
        }
    )


app.post("/api/addReliefP",(req,res)=>{

    const user = req.body.prog


    var dis = ""
    let dPromise = new Promise(function(Resolve,Reject){

        const sql = "Select disaster_id from disaster where disaster_name = ?"
        db.query(sql,user.dis_name,(err,result)=>{

            let resultx = JSON.parse(JSON.stringify(result))
            dis = result[0].disaster_id
            Resolve("ok")
        })

    })

    dPromise.then(
        function(){

            const SqlI = "Insert into relief_program(program_name,program_status,start_date,disaster_id) VALUES(?,?,?,?)"
  
            db.query(SqlI,[user.prog_name,user.prog_status,user.sdate,dis],(err,result)=>{
                if(err){
                    console.log(err)
                }
                res.send({message:"Relief Program Created"})
                  
            })
  
        }

    )

})

app.post("/api/add_disastercategory",(req,res)=>{
    const user = req.body.category
    const hold = "ACTIVE"
    const SqlU = "Insert into disaster_category (Disaster_type) VALUES (?)"

    db.query(SqlU,[user.Disaster_type],(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"New Category Added"})
        }
    })
})

app.post("/api/add_orgcategory",(req,res)=>{
    const user = req.body.category
    const hold = "ACTIVE"
    const SqlU = "Insert into org_category (Org_type) VALUES (?)"

    db.query(SqlU,[user.Org_type],(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"New Category Added"})
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

app.get("/api/cities", (req, res) => {
    const sqlget =
        "Select City_name from cities";
    db.query(sqlget, (err, result) => {
        console.log(err)
        res.send(result)
    });

})

app.get("/api/disasters", (req, res) => {
    const sqlget =
        "Select Disaster_name,Disaster_id from disaster";
    db.query(sqlget, (err, result) => {
        console.log(err)
        res.send(result)
    });

})

app.post("/api/addDisasterLoc", (req, res) => {
    const u = req.body.disloc
    var cityid = ""
    var disid = ""
    console.log(u)
    let dPromise = new Promise(function (Resolve, Reject) {
        const SqlD = "Select City_id from cities where City_name = ?"
        db.query(SqlD, u.City_name, (err, result) => {
            let resultx = JSON.parse(JSON.stringify(result))
            console.log(result)
            cityid = result[0].City_id
            console.log(cityid)
            Resolve("Ok")
        })
    })
    dPromise.then(
        function () {
            let newPromise = new Promise(function (Solve, Reeject) {
                const SqlL = "Select Disaster_id from disaster where DIsaster_name=?"
                db.query(SqlL, u.Disaster_name, (err, result) => {
                    let resultx = JSON.parse(JSON.stringify(result))
                    console.log(result)
                    disid = result[0].Disaster_id
                    console.log(disid)
                    Solve("Ok")
                })
            })
            newPromise.then(
                function () {
                    SqlR = "Insert into disaster_locations (City_id,Disaster_id,Location_name) VALUES (?,?,?)"
                    db.query(SqlR, [cityid, disid, u.Location_name], (err, result) => {
                        if (err) {
                            console.log(err)
                        }
                        res.send({ message: "Disaster Location Added" })
                    })
                }
            )
        }
    )
}
)



app.post("/api/login", (req,res)=>{

    const username = req.body.username;
    const password = req.body.password;

    const hold = "PENDING"
    const check = "Select * from users u, organizations o where u.username = ? and u.org_id = o.org_id and o.org_status = ?"
    
    db.query(check,[username,hold],(err,result)=>{

        if(err){
            console.log(err);
        }
        if(result.length > 0){
            res.send({message:"Your Registration is Pending"})
        }

        else{

 const sqlRet = "Select * from users where username = ?";
    db.query(sqlRet, username,(err,result)=>{
        if(err){
            res.send({err:err});
        }
        if(result.length > 0){
            bcrypt.compare(password,result[0].password,(error,response)=>{
                if(response){
                    res.send(result[0].Org_id)
                    console.log(response)
                }else{
                    res.send({message:"Wrong username/password combination"})
                    console.log(response)
                }
            })
        }else{
            res.send({message:"User doesn't exist"})
        }

    });

        }

    })
   
});

app.post("/api/commdetails",(req,res)=>{

    const user = req.body.dash
    let user1 = JSON.parse(user)
    const SqlQ = "Select pc.p_commitment_id,pc.comm_date,pc.status,p.product_name,dl.location_name,pg.program_name,pc.comm_qty,pc.exp_delivery_date from product_committment pc,product p,relief_program pg,disaster_locations dl where pc.product_id = p.product_id and pc.disaster_location_id = dl.disaster_location_id and pc.program_id = pg.program_id and pc.org_id = ? "

    db.query(SqlQ,user1,(err,result)=>{
        if(err){console.log(err)}
        else{
            console.log("NO ERROR")
            res.send(result)
        }
    })

})

app.post("/api/addRequirement", (req, res) => {
    const u = req.body.reqq

    var productid = ""
    var dislocid = ""
    console.log(u)
    
    let dPromise = new Promise(function (Resolve, Reject) {
        const SqlD = "Select Product_id from product where Product_name = ?"
        db.query(SqlD, u.Product_name, (err, result) => {
            let resultx = JSON.parse(JSON.stringify(result))
            console.log(result)
            productid = result[0].Product_id
            console.log(productid)
            Resolve("Ok")
        })
    })
    dPromise.then(
        function () {
            let newPromise = new Promise(function (Solve, Reeject) {
                const SqlL = "Select Disaster_location_id from disaster_locations where Location_name=?"
                db.query(SqlL, u.Location_name, (err, result) => {
                    let resultx = JSON.parse(JSON.stringify(result))
                    console.log(result)
                    dislocid = result[0].Disaster_location_id
                    console.log(dislocid)
                    Solve("Ok")
                })
            })
            newPromise.then(
                
                 function () {
                    console.log(productid)
                     console.log(dislocid)
                    SqlR = "Insert into product_requirements (Product_id,Disaster_location_id,Program_id,Req_qty,Request_date) VALUES (?,?,?,?,?)"
                    db.query(SqlR, [productid, dislocid, u.program_id,u.Quantity,u.date], (err, result) => {
                        if (err) {
                            console.log(err)
                        }else{
                        res.send({ message: "Requirement Raised Successfully" })

                        const SqlP = "Select * from product_requirement_summary where product_id = ? and disaster_location_id = ? and program_id = ?"
                            db.query(SqlP,[productid,dislocid,u.program_id],(err,result)=>{
                                if(result.length > 0 ){
                                    SqlM = "Update product_requirement_summary set Total_qty_req = Total_qty_req + ? where product_id = ? and disaster_location_id = ? and program_id = ?"
                                    db.query(SqlM,[u.Quantity,productid,dislocid,u.program_id],(err,result)=>{
                                        if(err){console.log(err)}
                                    })
                                }
                                else{
                                    const SqlI = "Insert into product_requirement_summary(product_id,disaster_location_id,program_id,total_qty_req) VALUES (?,?,?,?)"
                                    db.query(SqlI,[productid,dislocid,u.program_id,u.Quantity],(err,result)=>{
                                        if(err){console.log(err)}
                                    })
                                
                                
                                }
                            })
                        }
                        
                    })
                }
            )
        }
    )
}
)

app.get("/api/rprograminfo",(req,res)=>{

    const sqlget = 
    "select p.Program_id,p.Program_name,p.Program_status,d.Disaster_name,p.Start_date,p.End_date from relief_program p,disaster d where p.Disaster_id=d.Disaster_id";
    db.query(sqlget, (err,result)=>{
        console.log(err)
        res.send(result)
    }); 
})


app.get("/api/rprogramsummary",(req,res)=>{

    const sqlget = 
    "select r.Program_name,p.Product_name, dl.Location_name,d.Disaster_name,s.Total_qty_req,s.Total_qty_comm,s.Total_qty_fullfilled  from relief_program r,product p,disaster_locations dl,disaster d,product_requirement_summary s where s.Program_id=r.Program_id and s.Product_id=p.Product_id and s.Disaster_location_id=dl.Disaster_location_id and dl.Disaster_id=d.DIsaster_id";
    db.query(sqlget, (err,result)=>{
        console.log(err)
        res.send(result)
    }); 
})

app.post("/api/registringorg", (req, res) => {
    const prg = req.body.reg
    const Oid=req.body.dash
    let Oid1=JSON.parse(Oid)
    
   console.log(prg)
   console.log(Oid)
    
    const SqlU = "Insert into relief_providers (Program_id,Org_id) Values(?,?)"

    db.query(SqlU, [prg,Oid1], (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send({ message: "Successfully Registered for Relief Program :"+prg})
        }
    })
})

app.post("/api/MYrprograminfo", (req, res) => {
   
    const Oid=req.body.dash
    let Oid1=JSON.parse(Oid)
    
   
   console.log(Oid1)
    
    const SqlU = "select p.Program_id, rp.Program_name, rp.Program_status from relief_providers p,relief_program rp where  p.Program_id=rp.Program_id and p.Org_id=?"

    db.query(SqlU, Oid1, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            res.send(result)
        }
    })
})


app.post("/api/removingorg", (req, res) => {
    const prg = req.body.reg
    const Oid=req.body.dash
    let Oid1=JSON.parse(Oid)
    
   console.log(prg)
   console.log(Oid1)
    
    const SqlU = "Delete from relief_providers where Program_id=? and Org_id=?"

    db.query(SqlU, [prg,Oid1], (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send({ message: "Successfully Removed from Relief Program :"+prg})
        }
    })
})


app.listen(3001, () => {

    console.log("running on port 3001");

});

