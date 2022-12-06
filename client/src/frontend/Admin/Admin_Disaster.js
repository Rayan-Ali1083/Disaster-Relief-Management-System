import React, { useState, useEffect } from 'react'
import Header from '../../Extras/Header'
import Admin_sidebar from '../../Extras/Admin_sidebar'
import './admin_relief_program.css'
import Axios from 'axios'
import { Link } from 'react-router-dom';

function Admin_Disaster() {


  const [removeDis, SetremoveDis] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/remDis").then((response) => {
      SetremoveDis(response.data)
      //console.log(response.data)

    })

  })

  const RemoveDisas = (dis_id) => {
    Axios.post("http://localhost:3001/api/removingdisaster", { disas: dis_id }).then((resultx) => {
      if (resultx.data.message) {
        alert(resultx.data.message);
      }
    })
  };








  const [newDisasterLoc, setnewDisasterLoc] = useState({
    City_id: "", City_name: "", Disaster_id: "", Disaster_name: "", Location_name: ""
  });


  const [cities, SetCities] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/cities").then((response) => {
      SetCities(response.data)
      console.log(response)

    })

  }, [])

  const [disasters, SetDisasters] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/disasters").then((response) => {
      SetDisasters(response.data)
      console.log(response)

    })

  }, [])


  let name, value;

  const handleDisLocInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setnewDisasterLoc({ ...newDisasterLoc, [name]: value });

  }



  const addDisLoc = () => {
    Axios.post("http://localhost:3001/api/addDisasterLoc", { disloc: newDisasterLoc }).then((resultx) => {
      if (resultx.data.message) {
        alert(resultx.data.message);
      } else {
        alert(resultx.data.message1);
      }
    })
  };












  const [disasterdet, Setdisasterdet] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/disasterinfo").then((response) => {
      Setdisasterdet(response.data)
      //console.log(response.data)

    })

  }, [])


  const [newCategory, setnewCategory] = useState({
    Disaster_type: ""
  });

  const SubmitNewCateg = () => {
    Axios.post("http://localhost:3001/api/add_disastercategory", { category: newCategory }).then((resultx) => {
      if (resultx.data.message) {
        alert(resultx.data.message);
      } else {
        alert(resultx.data.message1);
      }
    })
  };

  // let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setnewCategory({ ...newCategory, [name]: value });

  }



  return (
    <>
      <Header />
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

          <button type="button" className="btn btn-primary" id='add_relief_progam' data-bs-toggle="modal" data-bs-target="#examplesModal">Disaster Locations</button>
          <div className="modal-centered modal-scrollable modal fade modal-xl" id="examplesModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5 text-black" id="exampleModalLabel">ADD LOCATION</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body" >
                  <div className="d-grid gap-2 col-6 mx-auto" >
      
                    <tr >

                      <td>
                        <select class="form-select" name='City_name' value={newDisasterLoc.City_name} onChange={handleDisLocInputs} aria-label="Default select example" >
                          <option selected>City</option>
                          {cities.map((val) => (
                            <option >{val.City_name}</option>
                          ))}
                        </select>
                      </td>

                      <td>
                        <select class="form-select" name='Disaster_name' value={newDisasterLoc.Disaster_name} onChange={handleDisLocInputs} aria-label="Default select example">
                          <option selected>Disaster</option>
                          {disasters.map((val) => (
                            <option >{val.Disaster_name}</option>
                          ))}
                        </select>
                      </td>


                      <td>  <input type="text" className="form-control" value={newDisasterLoc.dis_name} name='Location_name' onChange={handleDisLocInputs} placeholder="Location Name" aria-label="Username"></input>
                      </td>



                      {/* <button type="button" onClick={addDis} style={{ "background": "#89bd79", "borderRadius": "5px", "borderStyle": "none" }}>Add</button> */}
                    </tr>




                  </div>
                </div>
                <div className="modal-footer">

                  <button type="button" onClick={addDisLoc} className="btn btn-outline-success" data-bs-dismiss="modal">Add</button>
                  <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Go Back</button>

                </div>
              </div>
            </div>
          </div>

          <button type="button" className="btn btn-primary" id='add_relief_progam' data-bs-toggle="modal" data-bs-target="#removedismodal">Remove Disaster</button>


          <div className="modal-centered modal-scrollable modal fade modal-xl" id="removedismodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5 text-black" id="exampleModalLabel">REMOVE DISASTER</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body" >
                  {/* <div className="d-grid gap-2 col-6 mx-auto" > */}



                  <div className="card" style={{ "margin": "auto", "width": "100%", "border": "10px solid green", "padding": "5%" }}>
                    <h3>REMOVE DISASTER</h3>
                    <table className="table">

                      <thead>
                        <tr>
                          <th scope="col">DISASTER ID</th>
                          <th scope="col">DISASTER Name</th>
                          <th scope="col">DISASTER DATE</th>
                          <th scope="col">DISASTER TYPE</th>

                        </tr>
                      </thead>
                      <tbody>
                        {removeDis.map((val) => (

                          <tr>
                            <td>{val.Disaster_id}</td>
                            <td>{val.Disaster_name}</td>
                            <td>{val.Disaster_date}</td>
                            <td>{val.Disaster_type}</td>
                            <button type="button" onClick={() => { RemoveDisas(val.Disaster_id) }} style={{ "background": "#ff392e", "borderRadius": "5px", "borderStyle": "none" }}>REMOVE</button>
                          </tr>
                        ))}

                      </tbody>
                    </table>

                  </div>












                  {/* </div> */}
                </div>
                <div className="modal-footer">

                  <button type="button" onClick={addDisLoc} className="btn btn-success" data-bs-dismiss="modal">Add</button>
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Go Back</button>

                </div>
              </div>
            </div>
          </div>



          {/* yeh aik different page pe jaye ha */}
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Disaster ID</th>
              <th scope="col">Disaster Name</th>
              <th scope="col">Disaster date</th>
              <th scope="col">Disaster type</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>
            {disasterdet.map((val) => (
              <tr>
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