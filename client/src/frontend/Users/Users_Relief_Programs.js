import React ,{useState,useEffect} from 'react'
import Header from '../../Extras/Header'
import './Users_Relief_Programs.css'
import Axios from 'axios'


function Users_Relief_Programs() {

 

  const [reliefdet,Setreliefdet] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/reliefinfo").then((response)=>{
      Setreliefdet(response.data)
      //console.log(response.data)

    })

  },[])


  return (
    <>
        <Header/>
        {/* <Users_sidebar /> */}
        <div class="card">
          <div className='button'>
            <button type="button" className="btn btn-primary" id='add_relief_progam'>Register</button>
          </div>
          <table class="table">
  <thead>

   
    <tr>
      <th scope="col">#</th>
      <th scope="col">Program ID</th>
      <th scope="col">Program Name</th>
      <th scope="col">Program Status</th>
      <th scope="col">Disaster NAME</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
    </tr>
  </thead>
  <tbody>

{reliefdet.map((val)=>(
  <tr>
   <th scope="row">1</th>
   <td>{val.program_id}</td>
   <td>{val.program_name}</td>
   <td>{val.program_status}</td>
   <td>{val.disaster_name}</td>
   <td>{val.start_date}</td>
   <td>{val.end_date}</td>
 </tr>


    ))}

  </tbody>
</table>
        </div>
        
    </>
  )
}

export default Users_Relief_Programs