import React ,{useState,useEffect} from 'react'
import Header from '../../Extras/Header'
import Admin_sidebar from '../../Extras/Admin_sidebar'
import Axios from 'axios'

function Admin_Organizations() {

  const [orgname,Setorgname] = useState([]);
  const [pendingorg,Setpendingorg] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/orginfo").then((response)=>{
      Setorgname(response.data)
      //console.log(response.data)

    })

  },[])

const getPending = ()=>{

  Axios.get("http://localhost:3001/api/getpending").then((response)=>{
    console.log(response.data)
    Setpendingorg(response.data)

  })  
}
  return (
    <>
        <Header />
        <Admin_sidebar />
        <div class="card">
          <div className='button'>
          
          <button type="button" className="btn btn-primary" id='add_relief_progam'>Add Organization Category</button>
          <button type="button" onClick={getPending} className="btn btn-primary" id='add_relief_progam'>Add Organization</button>
          <button type="button" className="btn btn-primary" id='add_relief_progam'>Remove Organization</button>
          </div>

    <h1>ID :  NAME :    STATUS   CONTACT :    </h1><br></br>

          {orgname.map((val)=>{
          
        return <h3>{val.org_id} {val.org_name} {val.org_status} {val.org_contact}</h3>
      })}

 {pendingorg.map((val)=>{
  return <h3>{val.org_id} {val.org_name} {val.org_status} {val.org_contact}</h3>
})}
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Organization ID</th>
      <th scope="col">Organization Name</th>
      <th scope="col">Organization type</th>
      <th scope="col">Organization Status</th>
      <th scope="col">Relief Programs</th>
    </tr>
  </thead>
  <tbody>
 
   <tr>
      <th>1</th>
      <td>JDC</td>
      <td>JDC</td>
      <td>404</td>
      <td>404</td>

    </tr>
  
  

    <tr>
      <th scope="row">2</th>
      <td>101</td>
       <td>JDD</td>
      <td>404</td>
      <td>404</td>

    </tr>
   
   
  </tbody>
</table>

        </div>
        
    </>
  )
}

export default Admin_Organizations