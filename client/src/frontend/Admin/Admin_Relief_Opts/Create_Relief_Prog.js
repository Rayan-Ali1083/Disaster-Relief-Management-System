import React, {useState,useEffect} from 'react'
import Axios from 'axios'
function Create_Relief_Prog() {



  const [newProgram,setnewProgram] = useState({
    prog_name: "",prog_status: "",dis_name: "", sdate: ""
  });


  const [disastername,Setdisastername] = useState([]);


  useEffect(()=>{
    Axios.get("http://localhost:3001/api/disastername").then((response)=>{
      Setdisastername(response.data)
      console.log(response)

    })

  },[])


  let name, value;

  const handleRelInputs = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setnewProgram({...newProgram, [name]:value});
   
   }




   const addRelief = ()=>{
    Axios.post("http://localhost:3001/api/addReliefP",{prog:newProgram}).then((resultx)=>{
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
          <h3>CREATE RELIEF PROGRAM</h3>
          <table className="table">
        <thead>
            <tr>
            <th scope="col">Program Name</th>
            <th scope="col">Program Status</th>
            <th scope="col">Disaster Name</th>
            <th scope="col">Start Date</th>
            </tr>
        </thead>
  <tbody>
 
    <tr>
        <td><input type="text" className="form-control" name='prog_name' value={newProgram.prog_name} onChange={handleRelInputs} placeholder="Relief Program Name" aria-label="Username" aria-describedby="basic-addon1"></input></td>
        <td>
                <select class="form-select"  name='prog_status' value={newProgram.prog_status} onChange={handleRelInputs} aria-label="Default select example">
                <option selected>INACTIVE</option>
                <option>ACTIVE</option>
            
                </select>
          </td>
          <td>
                
                <select class="form-select" name='dis_name' value={newProgram.dis_name} onChange={handleRelInputs} aria-label="Default select example">
                <option selected>Default</option>
                  
                  {disastername.map((val)=>(
                    <option>{val.disaster_name}</option>
                  ))}
                
            
                </select>
          </td>
          <td>  <input type="date" name='sdate' value={newProgram.sdate} onChange={handleRelInputs} ></input></td>
        <button type="button" onClick={addRelief} style={{"background":"#89bd79", "borderRadius":"5px", "borderStyle":"none"}}>Create</button>
    </tr>
   
  </tbody>
    </table>
    </div>
        
   </>
  )
}

export default Create_Relief_Prog