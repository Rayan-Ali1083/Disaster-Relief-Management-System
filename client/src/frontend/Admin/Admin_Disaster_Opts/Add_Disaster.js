import React, {useState,useEffect} from 'react'
import Axios from 'axios'
function Add_Disaster() {



  const [newDisaster,setnewDisaster] = useState({
    dis_name: "", date: "",dis_type: "" 
  });
  const [disastertype,Setdisastertype] = useState([]);
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/disastercateg").then((response)=>{
      Setdisastertype(response.data)
      console.log(response)

    })

  },[])

  


  let name, value;

  const handleDisInputs = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setnewDisaster({...newDisaster, [name]:value});
   
   }


   const addDis = ()=>{
    Axios.post("http://localhost:3001/api/addDisaster",{dis:newDisaster}).then((resultx)=>{
      if(resultx.data.message){
        alert(resultx.data.message);
      }else{
        alert(resultx.data.message1);
      }
    })
  };


  return (
   <>
        <div className="card" style={{"margin": "auto", "width": "100%","border": "10px solid green","padding":"5%"}}>
          <h3>ADD DISASTER</h3>
          <table className="table">
        <thead>
            <tr>
            <th scope="col">Disaster Name</th>
            <th scope="col">Date</th>
            <th scope="col">Disaster Type</th>
            <th scope="col">Option</th>
            </tr>
        </thead>
  <tbody>
 
    <tr>
        <td>  <input type="text" className="form-control" value={newDisaster.dis_name} name= 'dis_name' onChange={handleDisInputs} placeholder="Disaster Name" aria-label="Username"></input>
</td>
        <td>  <input type="date" value={newDisaster.date} name='date' onChange={handleDisInputs}  ></input></td>
        <td>
                <select class="form-select" name='dis_type' value={newDisaster.dis_type} onChange={handleDisInputs} aria-label="Default select example">
                <option selected>Disaster type</option>
              {disastertype.map((val)=>(
        <option >{val.disaster_type}</option> 
              ))}
                </select>
</td>

        <button type="button" onClick={addDis} style={{"background":"#89bd79", "borderRadius":"5px", "borderStyle":"none"}}>Add</button>
    </tr>
   
  </tbody>
    </table>
    </div>
        
   </>
  )
}

export default Add_Disaster