import React, {useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import './Signup.css'
import Axios from 'axios'


function Signup() {

  const [newUser,setnewUser] = useState({
    org_name: "", user_name: "", pass: "", email: "" , org_cate: "", org_province: "" 
  });

  const SubmitU = ()=>{
    Axios.post("http://localhost:3001/api/signup",{user:newUser}).then((resultx)=>{
      if(resultx.data.message){
        alert(resultx.data.message);
      }else{
        alert(resultx.data.message1);
      }
    })
  };

  let name, value;

  const handleInputs = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setnewUser({...newUser, [name]:value});
   
   }

 

  return (
    <>
      <div id="pic"></div>
        <div className="card-body" id='mid-body'>
            <div>
              <h3 style={{"textAlign":"center", "marginTop":'4%'}}>Organization Details</h3>
                <input type="email" className='small-input' value={newUser.org_name} name='org_name' onChange={handleInputs} placeholder="Organization Name"></input>
                <input type="email" className='small-input' value={newUser.user_name} name='user_name' onChange={handleInputs} placeholder="User Name"></input>

                <input type="email" className='small-input' value={newUser.pass} name='pass' onChange={handleInputs} placeholder="Password"></input>
                <input type="email" className='small-input' value={newUser.email} name='email' onChange={handleInputs} placeholder="Email Address"></input>

                <input type="email" className='small-input' value={newUser.org_cate} name='org_cate' onChange={handleInputs} placeholder="Organization Category"></input>
                <input type="email" className='small-input' value={newUser.org_province} name='org_province' onChange={handleInputs} placeholder="Province"></input>
            
              <NavLink to='/' end><button type="button" className="btn btn-primary" style={{"marginLeft": "10%", "marginTop": "10%"}}>Go Back</button></NavLink>
              <button type="button" onClick={SubmitU} className="btn btn-primary" style={{"marginTop": "10%", "marginLeft": "68%"}}>Submit</button>
            </div>
        </div>
    </>
  )
}

export default Signup