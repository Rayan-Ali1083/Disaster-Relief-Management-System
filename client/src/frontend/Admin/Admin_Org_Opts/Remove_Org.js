import React from 'react'

function Remove_Org() {
  return (
    <>
        <div className="card" style={{"margin": "auto", "width": "100%","border": "10px solid green","padding":"5%"}}>
        <h3>REMOVE ORGANIZATIONS</h3>
          <table className="table">

        <thead>
            <tr>
            <th scope="col">Organization ID</th>
            <th scope="col">Organization Name</th>
            <th scope="col">Organization type</th>
            <th scope="col">Organization Status</th>
            <th scope="col">Option</th>
            </tr>
        </thead>
            <tbody>
                <tr>
                <td>ORG_0002</td>
                <td>ABC_KPK</td>
                <td>ORG_CAT_002</td>
                <td>ACTIVE</td>
                <button type="button" style={{"background":"#ff392e", "borderRadius":"5px", "borderStyle":"none"}}>REMOVE</button>
                </tr>
            </tbody>
            </table>
            <p>only active organiztions will be showed here. remove this while editing</p>
        </div>
    </>
  )
}

export default Remove_Org