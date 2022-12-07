import React ,{useState,useEffect} from 'react'
import Header from '../../Extras/Header'
import Admin_sidebar from '../../Extras/Admin_sidebar'
import Axios from 'axios'
import './admin_relief_program.css'


function Admin_Organizations() {

  
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





  const [orgname,Setorgname] = useState([]);


  useEffect(()=>{
    Axios.get("http://localhost:3001/api/orginfo").then((response)=>{
      Setorgname(response.data)
    })

  },[])




  const [newCategory,setnewCategory] = useState({
    Org_type: "" 
  });

  const SubmitU = ()=>{
    Axios.post("http://localhost:3001/api/add_orgcategory",{category:newCategory}).then((resultx)=>{
      if(resultx.data.message){
        alert(resultx.data.message);
      }else{
        alert(resultx.data.message1);
      }
    })
  };

  let name, value;

  const handleInputs = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setnewCategory({...newCategory, [name]:value});
   
   }

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
        <Header />
        <Admin_sidebar />
        <div className="card" style={{'backgroundColor':'#30574b'}}>
          <div className='button'>
          
          <button type="button" className="btn" id='add_relief_program' data-bs-toggle="modal" data-bs-target="#exampleModal">Add Organization Category</button>


          <div className="modal-centered modal-scrollable modal fade modal-lg" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content" style={{'backgroundColor':'#30574b', 'borderStyle':'none', 'borderColor':'transparent'}}>
                        <div className="modal-header" style={{'backgroundColor':'#30574b', 'borderStyle':'none', 'borderColor':'transparent'}}>
                          <h1 className="modal-title fs-5" id="exampleModalLabel" style={{'color':'white'}}>ADD ORGANIZATION CATEGORY</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body"  style={{ "margin": "auto", "width": "100%", "border": "3px solid black", "padding": "5%", 'backgroundColor':'#478484', 'borderRadius':'50px'}}>
                            <div className="d-grid gap-2">
                                
                            <input className='large-input' value={newCategory.Org_type} name='Org_type' onChange={handleInputs} style={{'borderRadius':'50px'}} placeholder="Organization Category"></input>
                            

                               
                              </div>                                  
                        </div>
                        <div className="modal-footer" style={{'backgroundColor':'#30574b', 'borderColor':'white', 'marginTop':'5%'}}>
                        <button type="button" onClick={SubmitU} className="btn btn-success" data-bs-dismiss="modal">Add</button>
                          <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Go Back</button>
                        </div>
                      </div>
                    </div>
                  </div>


          <button type="button" className="btn" id='add_relief_program' data-bs-toggle="modal" data-bs-target="#viewAdd">View/Add Organization</button>
          <div className="modal-centered modal-scrollable modal fade modal-lg" id="viewAdd" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content" style={{'backgroundColor':'#30574b', 'borderStyle':'none', 'borderColor':'transparent'}}>
                        <div className="modal-header" style={{'backgroundColor':'#30574b', 'borderStyle':'none', 'borderColor':'transparent'}}>
                          <h1 className="modal-title fs-5" id="exampleModalLabel" style={{'color':'white'}}>ADDING ORGANIZATIONS</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body"  style={{ "margin": "auto", "width": "100%", "border": "3px solid black", "padding": "5%", 'backgroundColor':'#478484', 'borderRadius':'50px'}}>
                            <div className="d-grid gap-2">
                                <table className="table"  style={{'backgroundColor':'#30574b', 'color':'#fffb00', 'textAlign':'center'}}  >
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
                        </div>
                        <div className="modal-footer" style={{'backgroundColor':'#30574b', 'borderColor':'white', 'marginTop':'5%'}}>

                          <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Go Back</button>
                         
                        </div>
                      </div>
                    </div>
                  </div>

          <button type="button" className="btn" id='add_relief_program' data-bs-toggle="modal" data-bs-target="#remOrg">Remove Organization</button>
                          

          <div className="modal-centered modal-scrollable modal fade modal-lg" id="remOrg" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content" style={{'backgroundColor':'#30574b', 'borderStyle':'none', 'borderColor':'transparent'}}>
                <div className="modal-header" style={{'backgroundColor':'#30574b', 'borderStyle':'none', 'borderColor':'transparent'}}>
                  <h1 className="modal-title fs-5" id="exampleModalLabel" style={{'color':'white'}}>REMOVE ORGANIZATIONS</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body"  style={{ "margin": "auto", "width": "100%", "border": "3px solid black", "padding": "5%", 'backgroundColor':'#478484', 'borderRadius':'50px'}}>
                    <div className="d-grid gap-2">
                        <table className="table"  style={{'backgroundColor':'#30574b', 'color':'#fffb00', 'textAlign':'center'}}  >
                          <thead>
                          <tr>
                            <th scope="col">Organization ID</th>
                            <th scope="col">Organization Name</th>
                            <th scope="col">Organization type</th>
                            <th scope="col">Organization Status</th>
                            <th scope="col">Option</th>
                            </tr>
                        </thead>
                  <tbody >
                  {removedet.map((val)=>(
                    <tr style={{'backgroundColor':'#30574b', 'color':'white', 'textAlign':'center', 'fontWeight':'bold', 'borderBottomColor':'transparent'}}>
                    <td>{val.org_id}</td>
                     <td>{val.org_name}</td>
                    <td>{val.org_category_id}</td>
                    <td>{val.org_status}</td>
                    <button type="button" id='removebtn' onClick={()=>{RemoveU(val.org_id)}}>REMOVE</button>
                  </tr>
                  ))}
                  
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


          </div>

 
          <table className="table" style={{'color':'#fffb00'}}>
  <thead>
    <tr style={{'backgroundColor':'#30574b', 'color':'#fffb00', 'textAlign':'center', 'fontWeight':'bold'}}>
      <th scope="col">Organization ID</th>
      <th scope="col">Organization Name</th>
      <th scope="col">Organization type</th>
      <th scope="col">Organization Status</th>
      <th scope="col">Relief Programs</th>
    </tr>
  </thead>
  <tbody>
 {orgname.map((val)=>(
  
    <tr style={{'backgroundColor':'#30574b', 'color':'white', 'textAlign':'center', 'fontWeight':'bold'}}>
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