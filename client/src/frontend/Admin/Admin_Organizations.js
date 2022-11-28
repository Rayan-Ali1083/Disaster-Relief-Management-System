import React ,{useState,useEffect} from 'react'
import Header from '../../Extras/Header'
import Admin_sidebar from '../../Extras/Admin_sidebar'
import Axios from 'axios'
import { Link } from 'react-router-dom';

function Admin_Organizations() {

  const [orgname,Setorgname] = useState([]);


  useEffect(()=>{
    Axios.get("http://localhost:3001/api/orginfo").then((response)=>{
      Setorgname(response.data)
    })

  },[])


  return (
    <>
        <Header />
        <Admin_sidebar />
        <div className="card">
          <div className='button'>
          
          <button type="button" className="btn btn-primary" id='add_relief_progam'>Add Organization Category</button>
          <Link to={"/Add_Org.js"}><button type="button" className="btn btn-primary" id='add_relief_progam'>View/Add Organization</button></Link>
          <button type="button" className="btn btn-primary" id='add_relief_progam'>Remove Organization</button>
          </div>

 
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
 {orgname.map((val)=>(
  
    <tr>
      <td>{val.org_id}</td>
       <td>{val.org_name}</td>
      <td>{val.org_category_id}</td>
      <td>{val.org_status}</td>
      <td>{val.program_name}</td>
    </tr>
   ))}
   
  </tbody>
</table>

        </div>
        
    </>
  )
}

export default Admin_Organizations