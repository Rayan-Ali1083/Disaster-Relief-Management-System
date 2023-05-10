import './Login_page.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import person from './images/person.png'
import React, {useState} from 'react'
import Axios from 'axios'
import SetCookie from '../../hooks/setCookie';
import GetCookie from '../../hooks/getCookie';
import RemoveCookie from '../../hooks/removeCookie';
import backvid from '../../Extras/backvid.mp4'
const Login_page = () => {

  const navigate = useNavigate();
   const [user, setUser] = useState({
    email: "", password:""
   });
   const[loginStatus, setLoginStatus] = useState([]);

   const toComponentC=(org_id)=>{
    navigate('/Users_Home.js',{state:{id:org_id}});
      }
  
   const login = ()=>{
    Axios.post("http://localhost:3001/api/login",{username:user.email,password:user.password,}).then((response)=>{
      if(response.data.message){
       //setLoginStatus(response.data.message)
        alert(response.data.message);
      }else if(response.data.message1){
        navigate('/Admin_Home.js')

      }else{
        setLoginStatus(response.data);
        RemoveCookie('usrin')
        SetCookie('usrin',JSON.stringify(response.data))
       toComponentC(response.data)
        
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
      <div className="loginpage" style={{"backgroundColor":"black"}}> 
        
          <video width="380" height="280" loop autoPlay muted className='loginpage'>
            <source src={backvid} type="video/mp4" />
          </video>
          <div className="login">
          <img id='pp' alt='Background' src={person}  style={{"width":"30%", 'marginTop':'15%'}}></img>
          <div className="mb-3">
            <label className="form-label" id='text'><b>Email address</b></label>
            <input type="email" className="form-control" id="textarea" name='email' value={user.email}
            onChange={handleInputs} placeholder="name@example.com"></input>
          </div>
          <div className="mb-3">
            <label className="form-label" id='text'><b>Password</b></label>
            <input className="form-control" id="textarea" name='password' value={user.password} 
            onChange={handleInputs} placeholder='***********' type = 'password'></input>
          </div>
          <button type="button" onClick={login} className="btn-1">Login</button>
          <div id="text"><b>New user? Sign up</b>
          <NavLink to='Signup.js'><b> here</b></NavLink>
          </div>
        </div>
        {/* <div style={{'width':'fit-content', "position":'relative', "marginLeft": '80%'}}>
        <NavLink to='Admin_Home.js'>
          <button type="button" className="btn-1" >Admin</button>
        </NavLink>
        <NavLink to='Users_Home.js'>
          <button type="button" className="btn-1" >Users</button>
        </NavLink>
        </div> */}
    <h1>{loginStatus}</h1>
      </div>
    </>
  )
}

export default Login_page