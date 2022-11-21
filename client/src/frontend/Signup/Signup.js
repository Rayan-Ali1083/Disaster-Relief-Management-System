import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import './Signup.css'

function Signup() {

  const [newUser,setnewUser] = useState({
    fname: "", lname: "", cnicnum: "", phnnum: "" , email: "" , password: "" , organization: "" , empID: "" 
  });

  let name, value;

  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setnewUser({...newUser, [name]:value});
    
   }

  return (
    <>
      <div id="pic"></div>
        <div className="card-body" id='mid-body'>
            <div>
              <h3 style={{"textAlign":"center"}}>Person Details</h3>
                <input type="email" className='small-input' value={newUser.fname} name="fname" onChange={handleInputs} placeholder="Organization Province"></input>
                <input type="email" className='small-input' value={newUser.lname} name="lname" onChange={handleInputs} placeholder="Last Name"></input>

                <input type="email" className='small-input' value={newUser.cnicnum} name="cnicnum" onChange={handleInputs} placeholder="CNIC Number"></input>
                <input type="email" className='small-input' value={newUser.phnnum} name="phnnum" onChange={handleInputs} placeholder="Phone Number"></input>

                <input type="email" className='small-input' value={newUser.email} name="email" onChange={handleInputs} placeholder="Email Address"></input>
                <input type="email" className='small-input' value={newUser.password} name="password" onChange={handleInputs} placeholder="Password"></input>

                <input type="email" className='small-input' value={newUser.organization} name="organization" onChange={handleInputs} placeholder="Organization Name"></input>
                <input type="email" className='small-input' value={newUser.empID} name="empID" onChange={handleInputs} placeholder="Employee ID"></input>                
            
              <div className="radio" style={{'marginLeft': '10%'}}>
                <div className="form-check" style={{'marginTop':'2%'}}>
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked></input>
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input>
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Female
                  </label>
                </div>
              </div>
              <NavLink to='/' end><button type="button" className="btn btn-primary" style={{"marginLeft": "10%"}}>Go Back</button></NavLink>
            </div>
        </div>
    </>
  )
}

export default Signup