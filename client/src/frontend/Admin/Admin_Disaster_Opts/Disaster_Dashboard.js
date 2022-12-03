import React from 'react'

function Disaster_Dashboard() {
  return (
    <>
        <div className="card" style={{"margin": "auto", "width": "100%","border": "10px solid green","padding":"5%"}}>
          <h3>DISASTER DASHBOARD</h3>
          <table className="table">
        <thead>
            <tr>
            <th scope="col">Disaster Location ID</th>
            <th scope="col">Disaster Name</th>
            <th scope="col">City Name</th>
            <th scope="col">Location Name</th>
            </tr>
        </thead>
  <tbody>
 
    <tr>
        <td>007</td>
        <td>James Bold</td>
        <td>Karachi</td>
        <td>Gulshan</td>

    </tr>
   
  </tbody>
    </table>
    </div>
      
    </>
  )
}

export default Disaster_Dashboard