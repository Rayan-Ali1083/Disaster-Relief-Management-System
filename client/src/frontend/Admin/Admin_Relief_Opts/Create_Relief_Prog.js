import React from 'react'
function Create_Relief_Prog() {
  return (
   <>
        <div className="card" style={{"margin": "auto", "width": "100%","border": "10px solid green","padding":"5%"}}>
          <h3>CREATE RELIEF PROGRAM</h3>
          <table className="table">
        <thead>
            <tr>
            <th scope="col">Program ID</th>
            <th scope="col">Program Name</th>
            <th scope="col">Program Status</th>
            <th scope="col">Disaster Name</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            </tr>
        </thead>
  <tbody>
 
    <tr>
        <td>PRG_001</td>
        <td>GOVT RELIEF PROGRAM FOR FLOOD 2022</td>
        <td>ACTIVE</td>
        <td>FLOOD'2022</td>
        <td>12-12-22</td>
        <button type="button" style={{"background":"#89bd79", "borderRadius":"5px", "borderStyle":"none"}}>Create</button>
    </tr>
   
  </tbody>
    </table>
    </div>
        
   </>
  )
}

export default Create_Relief_Prog