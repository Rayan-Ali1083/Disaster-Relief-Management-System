import './Login_page.css'
import { Link, NavLink, redirect } from 'react-router-dom'
import person from './images/person.png'
import React, {useState} from 'react'
import Axios from 'axios'

const Login_page = () => {

   const [user, setUser] = useState({
    email: "", password:""
   });
   const[loginStatus, setLoginStatus] = useState("");

   const authenticate = ()=>{

        if(loginStatus){
          <Link to='Signup.js' activeClassName="active">{loginStatus}</Link>
        }
   };
  
   const login = ()=>{
    Axios.post("http://localhost:3001/api/login",{username:user.email,password:user.password,}).then((response)=>{
      if(response.data.message){
       //setLoginStatus(response.data.message)
        alert(response.data.message);
      }else{
        setLoginStatus('true')
        alert("Logged In");
        //authenticate()
      }
    });
  };
   let name, value;

   const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value});
    
   }

  return (
    <>
      <div className="loginpage"> 
        <div className="login">
          <img id='pp' alt='Background' src={person}></img>
          <div className="mb-3">
            <label className="form-label" id='text'><b>Email address</b></label>
            <input type="email" className="form-control" id="textarea" name='email' value={user.email}
            onChange={handleInputs} placeholder="name@example.com"></input>
          </div>
          <div className="mb-3">
            <label className="form-label" id='text'><b>Password</b></label>
            <input className="form-control" id="textarea" name='password' value={user.password} 
            onChange={handleInputs} placeholder='***********'></input>
          </div>
          <button type="button" onClick={login} className="btn btn-primary" style={{"float":"centre"}}>Login</button>
          <div id="text"><b>New user? Sign up</b>
          <NavLink to='Signup.js'><b> here</b></NavLink>
          </div>
        </div>
        <NavLink to='Admin_Home.js'>
          <button type="button" className="btn btn-primary" style={{"marginLeft": "85%", "marginTop": "3%"}}>Admin</button>
        </NavLink>

    <h1>{loginStatus}</h1>
      </div>
    </>
  )
}

export default Login_page