import React ,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Axios from'axios'
function Relief_Dashboard() {

  
  const [reliefdet,Setreliefdet] = useState([]);

const { state } = useLocation();
useEffect(()=>{
   const{id}= state;
  console.log(id)
   Axios.post("http://localhost:3001/api/dashinfo",{dash:id}).then((response)=>{
      Setreliefdet(response.data)
      //console.log(response.data)

    })

},[])

return (
    <>
        <div className="card" style={{"margin": "auto", "width": "100%","border": "10px solid green","padding":"5%"}}>
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
 
  {reliefdet.map((val)=>(
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
            <th scope="col">Organization ID</th>
            <th scope="col">Product ID</th>
            <th scope="col">Disaster Location ID</th>
            <th scope="col">Program ID</th>
            <th scope="col">Committed Quantity</th>
            <th scope="col">Committed Date</th>
            <th scope="col">ETD </th>
            <th scope="col">Status</th>
            </tr>
        </thead>
  <tbody>
 
    <tr>
        <td>A</td>
        <td>A</td>
        <td>A</td>
        <td>A</td>
        <td>A</td>
        <td>A</td>
        <td>A</td>
        <td>A</td>
        <td>A</td>
    </tr>
        </tbody>
    </table>
    <h3>PRODUCT REQUIREMENT
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{"marginLeft":"10%"}}>Raise Requirment</button>
        <div class="modal-centered modal-scrollable modal fade modal-lg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5 text-black" id="exampleModalLabel">ADD ORGANIZATION CATEGORY</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="d-grid gap-2 col-6 mx-auto">                    
                                <select class="form-select" aria-label="Default select example">
                                <option selected>--Select Product--</option>
                                <option value="1">Milk</option>
                                <option value="2">Choclate</option>
                                <option value="3">Condom</option>
                                </select>
                                <select class="form-select" aria-label="Default select example">
                                <option selected>--Disaster Location--</option>
                                <option value="1">Your mom</option>
                                <option value="2">Fast</option>
                                <option value="3">lol</option>
                                </select>
                                <select class="form-select" aria-label="Default select example">
                                <option selected>--Relief Program--</option>
                                <option value="1">ABCD</option>
                                <option value="2">AAA</option>
                                <option value="3">XXX</option>
                                </select>
                                <input type="text" class="form-control" placeholder="Quantity" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                                <input type="date" style={{"fontSize":"medium"}}></input>
                            </div>
                        </div>
                        <div class="modal-footer">

                          <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal">Add</button>
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
            <th scope="col">Product ID</th>
            <th scope="col">Disaster Location ID</th>
            <th scope="col">Progam ID</th>
            <th scope="col">Required Quantity</th>
            <th scope="col">Requested Date</th>
            </tr>
        </thead>
  <tbody>
 
    <tr>
        <td>A</td>
        <td>A</td>
        <td>A</td>
        <td>A</td>
        <td>A</td>
        <td>A</td>
    </tr>
        </tbody>
    </table>
    <h3>PRODUCT FULLFILMENT</h3>
    <table className="table">
        <thead>
            <tr>
            <th scope="col">Organization Name</th>
            <th scope="col">Product Name</th>
            <th scope="col">Committed Quantity</th>
            <th scope="col">Committed Date</th>
            <th scope="col">Expected Delivery</th>
            <th scope="col">Status</th>
            </tr>
        </thead>
  <tbody>
 
    <tr>
        <td>A</td>
        <td>A</td>
        <td>A</td>
        <td>A</td>
        <td>A</td>
        <td>A</td>
    </tr>
        </tbody>
    </table>

    </div>

    
    </>
  )
}

export default Relief_Dashboard