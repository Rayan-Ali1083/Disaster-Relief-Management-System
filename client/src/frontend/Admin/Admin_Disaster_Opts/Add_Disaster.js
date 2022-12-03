import React from 'react'
function Add_Disaster() {
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
        <td>  <input type="text" className="form-control" placeholder="Disaster Name" aria-label="Username"></input>
</td>
        <td>  <input type="date"></input></td>
        <td><div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Disaster Type</button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item">Action</a></li>
        </ul>
        </div></td>

        <button type="button" style={{"background":"#89bd79", "borderRadius":"5px", "borderStyle":"none"}}>Add</button>
    </tr>
   
  </tbody>
    </table>
    </div>
        
   </>
  )
}

export default Add_Disaster