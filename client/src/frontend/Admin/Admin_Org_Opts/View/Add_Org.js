import React,{useState,useEffect}  from 'react'
import Axios from 'axios'
function Add_Org() {

    useEffect(()=>{
       
        Axios.get("http://localhost:3001/api/getpending").then((response)=>{
          console.log(response.data)
          Setpendingorg(response.data)
        })
    
      })


      const ApproveU = (org_id)=>{
        Axios.post("http://localhost:3001/api/approvePending",{user:org_id}).then((resultx)=>{
          if(resultx.data.message){
            alert(resultx.data.message);
          }
        })
      };

      const DeclineU = (org_id)=>{
        Axios.post("http://localhost:3001/api/declinePending",{user:org_id}).then((resultx)=>{
          if(resultx.data.message){
            alert(resultx.data.message);
          }
        })
      };
    
      const [pendingorg,Setpendingorg] = useState([]);


      // {pendingorg.map((val)=>{
      //   return <h3>{val.org_id} {val.org_name} {val.org_status} {val.org_contact}</h3>
      // })}
  return (
   <>
        <div className="card" style={{"margin": "auto", "width": "100%","border": "10px solid green","padding":"5%"}}>
          <table className="table">
        <thead>
            <tr>
            <th scope="col">Organization ID</th>
            <th scope="col">Organization Name</th>
            <th scope="col">Organization type</th>
            <th scope="col">Organization Status</th>
            <th scope="col">Organization Approval</th>
            </tr>
        </thead>
  <tbody>
 {pendingorg.map((val)=>(
    <tr>
      <td>{val.org_id}</td>
       <td>{val.org_name}</td>
      <td>{val.org_category_id}</td>
      <td>{val.org_status}</td>
      <button type="button" onClick={()=>{ApproveU(val.org_id)}} style={{"background":"#89bd79", "borderRadius":"5px", "borderStyle":"none"}}>Approve</button>
      <button type="button" onClick={()=>{DeclineU(val.org_id)}} style={{"background":"#ff392e", "borderRadius":"5px", "borderStyle":"none"}}>Decline</button>
    </tr>
   ))}
   
  </tbody>
</table>

        </div>
        
   </>
  )
}

export default Add_Org