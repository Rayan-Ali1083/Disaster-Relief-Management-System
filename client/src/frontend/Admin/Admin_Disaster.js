import React ,{useState,useEffect} from 'react'
import Header from '../../Extras/Header'
import Admin_sidebar from '../../Extras/Admin_sidebar'
import './admin_relief_program.css'
import Axios from 'axios'
import { Link } from 'react-router-dom';

function Admin_Disaster() {


  const [disasterdet,Setdisasterdet] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/disasterinfo").then((response)=>{
      Setdisasterdet(response.data)
      //console.log(response.data)

    })

  },[])


  const [newCategory,setnewCategory] = useState({
    Disaster_type: "" 
  });

  const SubmitNewCateg = ()=>{
    Axios.post("http://localhost:3001/api/add_disastercategory",{category:newCategory}).then((resultx)=>{
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
        <Header/>
        <Admin_sidebar />
        <div className="card">
          <div className='button'>
          <Link to={'/Add_Disaster.js'}><button type="button" className="btn btn-primary" id='add_relief_progam'>Add Disaster</button></Link>
          <button type="button" className="btn btn-primary" id='add_relief_progam' data-bs-toggle="modal" data-bs-target="#exampleModal">Add Disaster Category</button>



          <div class="modal-centered modal-scrollable modal fade modal-lg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5 text-black" id="exampleModalLabel">ADD DISASTER CATEGORY</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="d-grid gap-2 col-6 mx-auto">

                            <input type="email" className='large-input' value={newCategory.Disaster_type} name='Disaster_type' onChange={handleInputs} placeholder="Disaster Category"></input>



                              </div>                                  
                        </div>
                        <div class="modal-footer">

                          <button type="button" onClick={SubmitNewCateg} className="btn btn-outline-success" data-bs-dismiss="modal">Add</button>
                          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Go Back</button>

                        </div>
                      </div>
                    </div>
                  </div>
    
          <button type="button" className="btn btn-primary"  id='add_relief_progam' data-bs-toggle="modal" data-bs-target="#exampleModal">Disaster Locations</button>
          <div className="modal-centered modal-scrollable modal fade modal-xl" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5 text-black" id="exampleModalLabel">ADD LOCATION</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-grid gap-2 col-6 mx-auto">
                            <div class="form-group">
                              <label for="exampleFormControlSelect1">Cities</label>
                              <select class="form-control" id="exampleFormControlSelect1">
                                <option>--Select City--</option>
                                <option>Lahore</option>
                                <option>Sukkur</option>
                                <option>Taiwan</option>
                                <option>dholakpur</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="exampleFormControlSelect1">Disaster</label>
                              <select class="form-control" id="exampleFormControlSelect1">
                                <option>--Select Disaster--</option>
                                <option>Cal</option>
                                <option>DE</option>
                                <option>Nadeem Boi</option>
                                <option>Muazzam</option>
                              </select>
                            </div>
                              <input type="text" class="form-control" placeholder="Location Name" aria-label="Location Name" aria-describedby="basic-addon1"></input>
                            </div>      
                        </div>
                        <div className="modal-footer">

                          <button type="button" onClick={SubmitNewCateg} className="btn btn-outline-success" data-bs-dismiss="modal">Add</button>
                          <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Go Back</button>
                         
                        </div>
                      </div>
                    </div>
                  </div>
          
          {/* yeh aik different page pe jaye ha */}
          </div>
          
          <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Disaster ID</th>
      <th scope="col">Disaster Name</th>
      <th scope="col">Disaster date</th>
      <th scope="col">Disaster type</th>
      <th scope="col">Option</th>
    </tr>
  </thead>
  <tbody>
  {disasterdet.map((val)=>(
  <tr>
   <th scope="row">1</th>
   <td>{val.disaster_id}</td>
   <td>{val.disaster_name}</td>
   <td>{val.disaster_date}</td>
   <td>{val.disaster_type}</td>
   <td><Link to={'/Disaster_Dashboard.js'}><button type="button" className="btn btn-primary">Disaster Dashboard</button></Link></td>
 </tr>


    ))}
  
  </tbody>
</table>
        </div>
        
    </>
  )
}

export default Admin_Disaster