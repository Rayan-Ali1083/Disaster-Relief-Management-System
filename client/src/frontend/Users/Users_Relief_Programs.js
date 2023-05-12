import React, { useState, useEffect } from 'react'
import Users_Nav from './Users_Nav'
import Axios from 'axios'
import RemoveCookie from '../../hooks/removeCookie';
import SetCookie from '../../hooks/setCookie';
import GetCookie from '../../hooks/getCookie';

function Users_Relief_Programs() {


  const [Rprogram, SetRprogram] = useState([]);
  const [MYRlprogram, SetMYRlprogram] = useState([]);
 
 


  

  useEffect(() => {
    Axios.get("http://localhost:3001/api/rprograminfo").then((response) => {
      SetRprogram(response.data)
    })

   

  },[])

  var id = ""
    useEffect(()=>{
        id = GetCookie('usrin')
    })

    useEffect(() => {
      Axios.get("http://localhost:3001/api/rprograminfo").then((response) => {
        SetRprogram(response.data)
      })
  
      Axios.post("http://localhost:3001/api/MYrprograminfo",{ dash:id}).then((response) => {
        SetMYRlprogram(response.data)
      })
  
    })
    // set time interval

   
    const Registerorg = (prg_id) => {
      Axios.post("http://localhost:3001/api/registringorg", { reg: prg_id ,dash:id}).then((resultx) => {
        if (resultx.data.message) {
          alert(resultx.data.message);
        }
      })
    };

    const Removeorg = (prg_id) => {
      Axios.post("http://localhost:3001/api/removingorg", { reg: prg_id ,dash:id}).then((resultx) => {
        if (resultx.data.message) {
          alert(resultx.data.message);
        }
      })
    };

  return (
    <>
      <Users_Nav />

      <div className="card" style={{"width":"70%", "marginLeft":"15%", "borderRadius":"1%", 'backgroundColor':'transparent', 'borderStyle':'none'}}>
        <div className="card-body" style={{'borderStyle':'solid', 'borderColor':'black' }}>
          <table className="table" style={{'backgroundColor':'#30574b', 'color':'#fffb00','borderStyle':'none', 'textAlign':'center'}}>
            <thead style={{'borderStyle':'solid'}}>
              <tr>
                <th scope="col">Program ID</th>
                <th scope="col">Program Name</th>
                <th scope="col">Program Status</th>
                <th scope="col">Disaster Name</th>
                <th scope="col">Start Date</th>
                <th scope="col">Option</th>
              </tr>
            </thead>
            <tbody style={{'color':'white', 'fontWeight':'bold'}}>
              
                {Rprogram.map((val) => (

                  <tr>
                    <td>{val.Program_id}</td>
                    <td>{val.Program_name}</td>
                    <td>{val.Program_status}</td>
                    <td>{val.Disaster_name}</td>
                    <td>{val.Start_date}</td>
                    <td>
                  <button type="button" onClick={() => { Registerorg(val.Program_id) }} id='bttn' >Register</button>
                 

                </td>
                  </tr>
                ))}
               
              
            </tbody>
          </table>
        </div>

      </div>
      <div className="card" style={{"width":"70%", "marginLeft":"15%", "borderRadius":"1%", 'backgroundColor':'transparent', 'borderStyle':'none'}}>
        <div className="card-body" style={{'borderStyle':'solid', 'borderColor':'black' }}>
          <table className="table" style={{'backgroundColor':'#30574b', 'color':'#fffb00','borderStyle':'none', 'textAlign':'center'}}>
            <thead style={{'borderStyle':'solid'}}>
              <tr>
                <th scope="col">Program ID</th>
                <th scope="col">Program Name</th>
                <th scope="col">Program Status</th>
                <th scope="col">Option</th>
              </tr>
            </thead>
            <tbody style={{'color':'white', 'fontWeight':'bold'}}>
              
                {MYRlprogram.map((val) => (
                 
                  <tr>
                    <td>{val.Program_id}</td>
                    <td>{val.Program_name}</td>
                    <td>{val.Program_status}</td>
                    <td>
                  <button type="button" onClick={() => { Removeorg(val.Program_id) }}  id='removebtn'>Leave</button>

                </td>
                  </tr>
                ))}
               
              
            </tbody>
          </table>
        </div>

      </div>

    </>
  )
}

export default Users_Relief_Programs