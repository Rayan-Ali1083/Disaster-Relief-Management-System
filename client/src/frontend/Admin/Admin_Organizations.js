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
        <div className="card">
          <div className='button'>
          
          <button type="button" className="btn btn-primary" id='add_relief_progam'>Add Organization Category</button>
          <button type="button" onClick={getPending} className="btn btn-primary" id='add_relief_progam'>Add Organization</button>
          <button type="button" className="btn btn-primary" id='add_relief_progam'>Remove Organization</button>
          </div>

<<<<<<< HEAD
         
=======
>>>>>>> 3f75ccb7fd79c9c79d6a13647a4ebfc5aebc1bf4
 {pendingorg.map((val)=>{
  return <h3>{val.org_id} {val.org_name} {val.org_status} {val.org_contact}</h3>
})}
          <table className="table">
  <thead>
    <tr>
      <th scope="col">Organization ID</th>
      <th scope="col">Organization Name</th>
      <th scope="col">Organization type</th>
      <th scope="col">Organization Status</th>
      <th scope="col">Relief Programs</th>
    </tr>
  </thead>
  <tbody>
<<<<<<< HEAD

  {orgname.map((val)=>(
          
         
<tr>
      <th>#</th>
      <td>{val.org_id}</td>
      <td>{val.org_name}</td>
      <td>{val.org_status}</td>
      <td>{val.org_contact}</td>

    </tr>
  
        ))}
  
 
  
  
   
=======
 {orgname.map((val)=>(
    <tr>
      <td>{val.org_id}</td>
       <td>{val.org_name}</td>
      <td>{val.org_category_id}</td>
      <td>{val.org_status}</td>
      <td>UNDER CONSTRUCTION</td>
    </tr>
   ))}
>>>>>>> 3f75ccb7fd79c9c79d6a13647a4ebfc5aebc1bf4
   
  </tbody>
</table>

        </div>
        
    </>
  )
}

export default Admin_Organizations