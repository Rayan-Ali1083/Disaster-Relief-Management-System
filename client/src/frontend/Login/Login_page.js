import './Login_page.css'
import { NavLink } from 'react-router-dom'
import person from './images/person.png'
import React, {useState} from 'react'

const Login_page = () => {

   const [user, setUser] = useState({
    email: "", password:""
   });

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
          <div id="text"><b>New user? Sign up</b>
          <NavLink to='Signup.js'><b> here</b></NavLink>
          </div>
        </div>
        <NavLink to='Admin_Home.js'>
          <button type="button" className="btn btn-primary" style={{"marginLeft": "85%", "marginTop": "3%"}}>Admin</button>
        </NavLink>

      </div>
    </>
  )
}

export default Login_page