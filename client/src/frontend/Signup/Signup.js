import React, {useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import './Signup.css'
import Axios from 'axios'

import backvid from '../../Extras/backvid.mp4'


function Signup() {

  const [newUser,setnewUser] = useState({
    org_name: "", user_name: "", pass: "", email: "" , org_cate: "", org_province: "" 
  });


  const SubmitU = () => {
    // Check if any field is empty
    for (const key in newUser) {
      if (newUser[key].trim() === "") {
        alert(`${key.replace('_', ' ').toUpperCase()} field cannot be empty.`);
        return;
      }
    }
    if (newUser.pass.length < 8) {
      alert(`Password must be at least 8 characters.`);
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(newUser.email)) {
      alert('Invalid email address.');
      return;
    }
    Axios.post("http://localhost:3001/api/signup", { user: newUser }).then((resultx) => {
      if (resultx.data.message) {
        alert(resultx.data.message);
      } else {
        alert(resultx.data.message1);
      }
    })
};

const [orgtype,Setorgtype] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/api/orgtype").then((response) => {
      Setorgtype(response.data)
      console.log(response.data)

    })

  }, [])

  let name, value;

  const handleInputs = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setnewUser({...newUser, [name]:value});
   
   }

 

  return (
    <>
      <div className="signup" style={{"backgroundColor":"black"}}>
      <video width="380" height="280" loop autoPlay muted className='loginpage'>
            <source src={backvid} type="video/mp4" />
          </video>
        <div className="card-body" id='mid-body'>
            <div>
              <h3 style={{"textAlign":"center", "marginTop":'4%'}}>Organization Details</h3>
                <input type="text" className='small-input' value={newUser.org_name} name='org_name' onChange={handleInputs} placeholder="Organization Name" required></input>
                <input type="text" className='small-input' value={newUser.user_name} name='user_name' onChange={handleInputs} placeholder="User Name" required></input>

                <input type="password" className='small-input' value={newUser.pass} name='pass' onChange={handleInputs} placeholder="Password" required></input>
                <input type="email" className='small-input' value={newUser.email}  name='email' onChange={handleInputs} placeholder="Email Address" required></input>
                
                <select type="text" className='small-input' value={newUser.org_province} name='org_province' onChange={handleInputs} placeholder="Province" required>
                 <option>Select Province</option>
                  <option>Sindh</option>
                  <option>Punjab</option>
                  <option>Balochistan</option>
                  <option>KPK</option>
                  <option>Kashmir</option>

                </select>

                  <select className="form-select" value={newUser.org_cate} name='org_cate' onChange={handleInputs} style={{'width':'35%', 'marginLeft':'55%', 'marginTop':'-4%'}}>
                  <option value>Organization Category</option>
                  {orgtype.map((val) => (
                            <option >{val.org_type}</option>
                          ))}
                        </select>
              <div style={{'marginTop':'3%', 'marginLeft':'10%', 'marginRight':'10%'}}>
                <NavLink to='/' end><button type="button" className="btn-1" style={{'marginRight':'70%'}}>Go Back</button></NavLink>
                <button type="button" onClick={SubmitU} className="btn-1">Submit</button>
              </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Signup