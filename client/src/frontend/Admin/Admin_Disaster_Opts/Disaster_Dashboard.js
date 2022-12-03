import React from 'react'

function Disaster_Dashboard() {
  return (
    <>
        <div className="card" style={{"margin": "auto", "width": "100%","border": "10px solid green","padding":"5%"}}>
          <h3>DISASTER DASHBOARD</h3>
          <table className="table">
        <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Option</th>
            </tr>
        </thead>
  <tbody>
 
    <tr>
        <td></td>
        <td></td>
        <td></td>

        <button type="button" style={{"background":"#89bd79", "borderRadius":"5px", "borderStyle":"none"}}>Add</button>
    </tr>
   
  </tbody>
    </table>
    </div>
      
    </>
  )
}

export default Disaster_Dashboard