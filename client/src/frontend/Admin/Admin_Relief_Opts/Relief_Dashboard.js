import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Axios from 'axios'
function Relief_Dashboard() {


  const [reliefdet, Setreliefdet] = useState([]);
  const [proddet, Setproddet] = useState([]);
  const [prodful, Setprodful] = useState([]);
  const [productsreq, SetProductsreq] = useState([]);

  const [dislocations, Setdislocations] = useState([]);
  const [newrequirement, Setnewrequirement] = useState({
     Product_name: "", Quantity: 0, date: "", program_id: "",Location_name: ""
  });


  const { state } = useLocation();
  useEffect(() => {
    const { id } = state;
    console.log(id)
    Axios.post("http://localhost:3001/api/dashinfo", { dash: id }).then((response) => {
      Setreliefdet(response.data)
      //console.log(response.data)

    })

    Axios.post("http://localhost:3001/api/dashmoreinfo", { dash: id }).then((response) => {
      Setproddet(response.data)
      //console.log(response.data)

    })

    Axios.post("http://localhost:3001/api/dashfulinfo", { dash: id }).then((response) => {
      Setprodful(response.data)
      console.log(response.data)

    })

    Axios.post("http://localhost:3001/api/dislocations" , { dash: id }).then((response) => {
      Setdislocations(response.data)
      console.log(response)

    })

  }, [])






  useEffect(() => {
    Axios.get("http://localhost:3001/api/productsinfo").then((response) => {
      SetProductsreq(response.data)
      console.log(response)

    })

    

  }, [])



  let name, value;

  const handlerequirements = (e) => {
    name = e.target.name;
    value = e.target.value;
    Setnewrequirement({ ...newrequirement, [name]: value });

  }

  const Addreq = () => {
    const { id } = state
     newrequirement.program_id=id
    Axios.post("http://localhost:3001/api/addRequirement", { reqq: newrequirement }).then((resultx) => {
      if (resultx.data.message) {
        alert(resultx.data.message);
      } else {
        alert(resultx.data.message1);
      }
    })
  };

  return (
    <>
      <div className="card" style={{ "margin": "auto", "width": "100%", "border": "10px solid green", "padding": "5%" }}>
        <h3>RELIEF PROGRAM DASHBOARD</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Program ID</th>
              <th scope="col">Program Name</th>
              <th scope="col">Program Status</th>
              <th scope="col">Disaster Name</th>
              <th scope="col">Start Date</th>
            </tr>
          </thead>
          <tbody>

            {reliefdet.map((val) => (
              <tr>
                <td>{val.program_id}</td>
                <td>{val.program_name}</td>
                <td>{val.program_status}</td>
                <td>{val.disaster_name}</td>
                <td>{val.start_date}</td>
              </tr>


            ))}

          </tbody>
        </table>
        <h3>PRODUCT COMMITMENT</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Commitment ID</th>
              <th scope="col">Organization</th>
              <th scope="col">Product</th>
              <th scope="col">Disaster Location</th>
              <th scope="col">Committed Quantity</th>
              <th scope="col">Committed Date</th>
              <th scope="col">ETD </th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>

            {reliefdet.map((val) => (
              <tr>
                <td>{val.p_commitment_id}</td>
                <td>{val.org_name}</td>
                <td>{val.product_name}</td>
                <td>{val.location_name}</td>
                <td>{val.comm_qty}</td>
                <td>{val.comm_date}</td>
                <td>{val.exp_delivery_date}</td>
                <td>{val.status}</td>
              </tr>


            ))}
          </tbody>
        </table>
        <h3>PRODUCT REQUIREMENT
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ "marginLeft": "10%" }}>Raise Requirment</button>
          <div class="modal-centered modal-scrollable modal fade modal-xl" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h3 class="modal-title fL-5 text-black" id="exampleModalLabel">Raise Requirment</h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div className="card" style={{ "margin": "auto", "width": "100%", "border": "4px solid black", "padding": "5%" }}>
                    {/* <h3>ADD DISASTER LOCATION</h3> */}
                    <table className="table">

                      <tbody>
                        <tr>
                          <td>
                            <select class="form-select" name='Product_name' value={newrequirement.Product_name} onChange={handlerequirements} aria-label="Default select example">
                              <option selected>--Select Product--</option>
                              {productsreq.map((val) => (
                                <option >{val.Product_name}</option>
                               
                              ))}
                                
                            </select>
                          </td>
                          <td>
                            <select class="form-select" name='Location_name' value={newrequirement.Location_name} onChange={handlerequirements}aria-label="Default select example">
                              <option selected>--Disaster Location--</option>
                              {dislocations.map((val) => (
                                <option >{val.Location_name}</option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select class="form-select" name='Product_name' value={newrequirement.program_id} onChange={handlerequirements} aria-label="Default select example">
                              {/* <option selected>--Relief Program--</option> */}
                              {reliefdet.map((val) => (

                                <option selected> {val.program_id}</option>




                              ))}

                            </select>
                          </td>
                          <td>
                            <input type="number" min='0' className="form-control" value={newrequirement.Quantity} name='Quantity' onChange={handlerequirements} placeholder="Quantity" aria-label="Quantity" aria-describedby="basic-addon2"></input>
                          </td>
                          <td>
                            <input type="date" className="form-control" value={newrequirement.date} name='date' onChange={handlerequirements} style={{ "fontSize": "medium" }}></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="modal-footer">

                  <button type="button" onClick={Addreq} className="btn btn-outline-success" data-bs-dismiss="modal">Add</button>
                  <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Go Back</button>

                </div>
              </div>
            </div>
          </div>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Requirement ID</th>
              <th scope="col">Product</th>
              <th scope="col">Disaster Location</th>
              <th scope="col">Required Quantity</th>
              <th scope="col">Requested Date</th>
            </tr>
          </thead>
          <tbody>

            {proddet.map((val) => (
              <tr>
                <td>{val.p_requirement_id}</td>
                <td>{val.product_name}</td>
                <td>{val.location_name}</td>
                <td>{val.req_qty}</td>
                <td>{val.request_date}</td>
              </tr>


            ))}
          </tbody>
        </table>
        <h3>PRODUCT FULLFILMENT</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Organization Name</th>
              <th scope="col">Product Name</th>
              <th scope="col">Committed Quantity</th>
              <th scope="col">Fulfilled Quantity</th>
              <th scope="col">Expected Delivery</th>
            </tr>
          </thead>
          <tbody>

            {prodful.map((val) => (
              <tr>
                <td>{val.org_name}</td>
                <td>{val.product_name}</td>
                <td>{val.comm_qty}</td>
                <td>{val.qty_fullfilled}</td>
                <td>{val.fullfilled_date}</td>
              </tr>


            ))}
          </tbody>
        </table>

      </div>


    </>
  )
}

export default Relief_Dashboard