import React from 'react'
function Add_Disaster() {
  return (
   <>
        <div className="card" style={{"margin": "auto", "width": "100%","border": "10px solid green","padding":"5%"}}>
          <h3>CREATE RELIEF PROGRAM</h3>
          <table className="table">
        <thead>
            <tr>
            <th scope="col">Disaster ID</th>
            <th scope="col">Disaster Name</th>
            <th scope="col">Date</th>
            <th scope="col">Disaster Type</th>
            <th scope="col">Option</th>
            </tr>
        </thead>
  <tbody>
 
    <tr>
        <td>DISASTER_001</td>
        <td>FLOOD'2022</td>
        <td>2022-06-13</td>
        <td>FLOOD</td>

        <button type="button" style={{"background":"#89bd79", "borderRadius":"5px", "borderStyle":"none"}}>Add</button>
    </tr>
   
  </tbody>
    </table>
    </div>
        
   </>
  )
}

export default Add_Disaster