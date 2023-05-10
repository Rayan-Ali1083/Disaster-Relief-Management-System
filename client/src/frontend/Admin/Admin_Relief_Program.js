import React ,{useState,useEffect} from 'react'
import Header from '../../Extras/Header'
import Admin_sidebar from '../../Extras/Admin_sidebar'
import './admin_relief_program.css'
import Axios from 'axios'
import {Link, useNavigate} from 'react-router-dom';

function Admin_Relief_Program() {



  const navigate= useNavigate()
  const [removerelief, Setremoverelief] = useState([]);
  
  const [reliefdet,Setreliefdet] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/remrelief").then((response) => {
      Setremoverelief(response.data)
      //console.log(response.data)

    })

  })

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/reliefinfo").then((response)=>{
      Setreliefdet(response.data)
      //console.log(response.data)

    })

  })


  const toComponentB=(program_id)=>{
    navigate('/Relief_Dashboard.js',{state:{id:program_id}});
      }

      




      const [newProgram,setnewProgram] = useState({
        prog_name: "",prog_status: "",dis_name: "", sdate: ""
      });
    
    
      const [disastername,Setdisastername] = useState([]);
    
    
      useEffect(()=>{
        Axios.get("http://localhost:3001/api/disastername").then((response)=>{
          Setdisastername(response.data)
          console.log(response)
    
        })
    
      })
    
    
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



      const Removereliefp = (prg_id) => {
        Axios.post("http://localhost:3001/api/removingreliefp", { prg: prg_id }).then((resultx) => {
          if (resultx.data.message) {
            alert(resultx.data.message);
          }
        })
      };








  return (
    <>
        <Header/>
        <Admin_sidebar />
        <div className="card" style={{'backgroundColor':'#30574b', 'borderStyle':'none', 'textAlign':'center'}}>
          <div className="card-body">
          <div className='button'>
          <button type="button" className="btn" id='add_relief_program' data-bs-toggle="modal" data-bs-target="#exampleModal">Create Relief Program</button>
          <div className="modal-centered modal-scrollable modal fade modal-lg" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content" style={{'backgroundColor':'#30574b', 'borderColor':'transparent'}}>
                <div className="modal-header" style={{'backgroundColor':'#30574b', 'borderStyle':'none', 'borderColor':'transparent'}}>
                  <h1 className="modal-title fs-5" id="exampleModalLabel" style={{'color':'white'}}>Create Relief Program</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body" style={{ "margin": "auto", "width": "100%", "border": "3px solid black", "padding": "5%", 'backgroundColor':'#478484', 'borderRadius':'50px'}}>
                  <div className="d-grid gap-2" >
          <table className="table" style={{'backgroundColor':'#30574b', 'color':'#fffb00', 'textAlign':'center'}}  >
        <thead>
            <tr>
            <th scope="col">Program Name</th>
            <th scope="col">Program Status</th>
            <th scope="col">Disaster Name</th>
            <th scope="col">Start Date</th>
            <th scope="col">Option</th>            
            </tr>
        </thead>
  <tbody style={{'borderColor':'transparent'}}>
 
    <tr>
        <td><input type="text" className="form-control" name='prog_name' value={newProgram.prog_name} onChange={handleRelInputs} placeholder="Relief Program Name" aria-label="Username" aria-describedby="basic-addon1"></input></td>
        <td>
                <select className="form-select"  name='prog_status' value={newProgram.prog_status} onChange={handleRelInputs} aria-label="Default select example">
                <option value>INACTIVE</option>
                <option>ACTIVE</option>
            
                </select>
          </td>
          <td>
                
                <select className="form-select" name='dis_name' value={newProgram.dis_name} onChange={handleRelInputs} aria-label="Default select example">
                <option value>Default</option>
                  
                  {disastername.map((val)=>(
                    <option>{val.disaster_name}</option>
                  ))}
                
            
                </select>
          </td>
          <td>  <input type="date" name='sdate' value={newProgram.sdate} onChange={handleRelInputs} ></input></td>
        <button type="button" onClick={addRelief} style={{"background":"#89bd79", "borderRadius":"5px", "borderStyle":"none", 'padding':'8px'}}>Create</button>
    </tr>
   
  </tbody>
    </table>

                    
                  </div>
                </div>
                <div className="modal-footer" style={{'backgroundColor':'#30574b', 'borderColor':'white', 'marginTop':'5%'}}>

                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Go Back</button>

                </div>
              </div>
            </div>
          </div>

          <button type="button" className="btn " id='add_relief_program' data-bs-toggle="modal" data-bs-target="#removedismodal">Remove Relief Program</button>


<div className="modal-centered modal-scrollable modal fade modal-lg" id="removedismodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" style={{'backgroundColor':'transparent', 'borderStyle':'none'}}>
    <div className="modal-content" style={{'backgroundColor':'#30574b', 'borderStyle':'none', 'borderColor':'transparent'}}>
      <div className="modal-header" style={{'backgroundColor':'#30574b', 'borderStyle':'none', 'borderColor':'transparent'}}>
        <h3 className="modal-title fl-5" id="exampleModalLabel"  style={{'backgroundColor':'#30574b', 'borderStyle':'none', 'borderColor':'transparent', 'color':'white'}}>REMOVE Relief Program</h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body" style={{'backgroundColor':'#30574b','borderColor':'transparent'}}>
        <div className="card" style={{ "margin": "auto", "width": "100%", "border": "3px solid black", "padding": "5%", 'backgroundColor':'#478484', 'borderRadius':'50px'}}>
          {/* <h3>REMOVE DISASTER</h3> */}
          <table className="table" style={{'borderRadius':'50px'}}>

            <thead style={{'backgroundColor':'#30574b', 'color':'#fffb00', 'textAlign':'center'}}>
              <tr >
                <th scope="col">PROGRAM ID</th>
                <th scope="col">PROGRAM NAME</th>
                <th scope="col">PROGRAM STATUS</th>
                <th scope="col">OPTION</th>

              </tr>
            </thead>
            <tbody>
              {removerelief.map((val) => (

                <tr style={{'backgroundColor':'#30574b', 'color':'white', 'textAlign':'center', 'borderStyle':'none', 'borderColor':'transparent'}}>
                  <td>{val.Program_id}</td>
                  <td>{val.Program_name}</td>
                  <td>{val.Program_status}</td>
                  <button type="button" id='removebtn' onClick={() => { Removereliefp(val.Program_id) }}>REMOVE</button>
                </tr>
              ))}

            </tbody>
          </table>

        </div>

        
      </div>
      <div className="modal-footer">

        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Go Back</button>

      </div>
    </div>
  </div>
</div>




          </div>
          <table className="table" style={{'color':'#fffb00', 'borderStyle':'none'}}>
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
  <tr style={{'backgroundColor':'#30574b', 'color':'white','borderStyle':'none', 'textAlign':'center', 'fontWeight':'bold'}}>
   <td>{val.program_id}</td>
   <td>{val.program_name}</td>
   <td>{val.program_status}</td>
   <td>{val.disaster_name}</td>
   <td>{val.start_date}</td>
   <td>{val.end_date}</td>
   <td><button type="button" onClick={()=>{toComponentB(val.program_id)}} className="btn btn-primary">Dashboard</button></td>
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