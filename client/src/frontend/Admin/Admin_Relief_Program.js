import React ,{useState,useEffect} from 'react'
import Header from '../../Extras/Header'
import Admin_sidebar from '../../Extras/Admin_sidebar'
import './admin_relief_program.css'
import Axios from 'axios'
import {Link, useNavigate} from 'react-router-dom';

function Admin_Relief_Program() {



  const navigate= useNavigate()
  
  const [reliefdet,Setreliefdet] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/reliefinfo").then((response)=>{
      Setreliefdet(response.data)
      //console.log(response.data)

    })

  },[])


  const toComponentB=(program_id)=>{
    navigate('/Relief_Dashboard.js',{state:{id:program_id}});
      }

  return (
    <>
        <Header/>
        <Admin_sidebar />
        <div class="card">
          <div className="card-body">
          <div className='button'>
            <Link to={'/Create_Relief_Prog.js'} ><button type="button" className="btn btn-primary" id='add_relief_progam'>Create Relief Program</button></Link>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Program ID</th>
                <th scope="col">Program Name</th>
                <th scope="col">Program Status</th>
                <th scope="col">Disaster NAME</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Option</th>
              </tr>
    </thead>
  <tbody>

{reliefdet.map((val)=>(
  <tr>
   <td>{val.program_id}</td>
   <td>{val.program_name}</td>
   <td>{val.program_status}</td>
   <td>{val.disaster_name}</td>
   <td>{val.start_date}</td>
   <td>{val.end_date}</td>
   <td><button type="button" onClick={()=>{toComponentB(val.program_id)}} class="btn btn-primary">Dashboard</button></td>
 </tr>


    ))}

  </tbody>
</table>
        </div>
        </div>
    </>
  )
}

export default Admin_Relief_Program