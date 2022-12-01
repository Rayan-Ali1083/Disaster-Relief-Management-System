import React ,{useState,useEffect} from 'react'
import Axios from 'axios'

function Remove_Org() {


  const [removedet,Setremovedet] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/remOrg").then((response)=>{
      Setremovedet(response.data)
      //console.log(response.data)

    })

  })

  const RemoveU = (org_id)=>{
    Axios.post("http://localhost:3001/api/declinePending",{user:org_id}).then((resultx)=>{
      if(resultx.data.message){
        alert(resultx.data.message);
      }
    })
  };
  return (
    <>
        <div className="card" style={{"margin": "auto", "width": "100%","border": "10px solid green","padding":"5%"}}>
        <h3>REMOVE ORGANIZATIONS</h3>
          <table className="table">

        <thead>
            <tr>
            <th scope="col">Organization ID</th>
            <th scope="col">Organization Name</th>
            <th scope="col">Organization type</th>
            <th scope="col">Organization Status</th>
            <th scope="col">Program Name</th>
            <th scope="col">Option</th>
            </tr>
        </thead>
            <tbody>
            {removedet.map((val)=>(
  
  <tr>
    <td>{val.org_id}</td>
     <td>{val.org_name}</td>
    <td>{val.org_category_id}</td>
    <td>{val.org_status}</td>
    <td>{val.program_name}</td>
    <button type="button" onClick={()=>{RemoveU(val.org_id)}} style={{"background":"#ff392e", "borderRadius":"5px", "borderStyle":"none"}}>REMOVE</button>
  </tr>
 ))}
 
            </tbody>
            </table>
           
        </div>
    </>
  )
}

export default Remove_Org