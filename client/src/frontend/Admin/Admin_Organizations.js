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


  return (
    <>
        <Header />
        <Admin_sidebar />
        <div className="card">
          <div className='button'>
          
          <button type="button" className="btn btn-primary" id='add_relief_progam' data-bs-toggle="modal" data-bs-target="#exampleModal">Add Organization Category</button>


          <div class="modal-centered modal-scrollable modal fade modal-lg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5 text-black" id="exampleModalLabel">ADD ORGANIZATION CATEGORY</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="d-grid gap-2 col-6 mx-auto">
                                
                            <input type="email" className='large-input' value={newCategory.Org_type} name='Org_type' onChange={handleInputs} placeholder="Organization Category"></input>
                            

                               
                              </div>                                  
                        </div>
                        <div class="modal-footer">

                          <button type="button" onClick={SubmitU} className="btn btn-outline-success" data-bs-dismiss="modal">Add</button>
                          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Go Back</button>
                         
                        </div>
                      </div>
                    </div>
                  </div>



          <Link to={"/Add_Org.js"}><button type="button" className="btn btn-primary" id='add_relief_progam'>View/Add Organization</button></Link>
          <Link to={"/Remove_Org.js"}><button type="button" className="btn btn-primary" id='add_relief_progam'>Remove Organization</button></Link>
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