import React from 'react'

function Relief_Dashboard() {
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
 
    <tr>
        <td>A</td>
        <td>A</td>
        <td>A</td>
        <td>A</td>
        <td>A</td>
    </tr>
   
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
        <button type="button" className="btn btn-primary" style={{"marginLeft":"10%"}}>Raise Requirment</button>
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