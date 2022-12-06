import React ,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Axios from'axios'

function Disaster_Dashboard() {

  const [dislocdet,Setdislocdet] = useState([]);

  const { state } = useLocation();
  useEffect(()=>{
     const{id}= state;
    console.log(id)
     Axios.post("http://localhost:3001/api/dislocdashinfo",{dash:id}).then((response)=>{
      Setdislocdet(response.data)
        //console.log(response.data)
  
      })
  
  },[])


  return (
    <>
        <div className="card" style={{"margin": "auto", "width": "100%","border": "10px solid green","padding":"5%"}}>
          <h3>DISASTER DASHBOARD</h3>
          <table className="table">
        <thead>
            <tr>
            <th scope="col">Disaster Location ID</th>
            <th scope="col">Location Name</th>
            <th scope="col">City Name</th>
            <th scope="col">Province Name</th>
            
            </tr>
        </thead>
  <tbody>
 
  {dislocdet.map((val)=>(
  <tr>
   <td>{val.Disaster_location_id}</td>
   <td>{val.Location_name}</td>
   <td>{val.City_name}</td>
   <td>{val.Province_name}</td>
 </tr>
   ))}
  </tbody>
    </table>
    </div>
      
    </>
  )
}

export default Disaster_Dashboard