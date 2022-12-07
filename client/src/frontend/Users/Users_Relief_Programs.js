import React from 'react'
import Users_Nav from './Users_Nav'

function Users_Relief_Programs() {
  return (
    <>
        <Users_Nav/>
        
        <div className="card" style={{'margin-left':'auto','margin-right':'auto'}}>
          <div className="card-body">
          <table className="table">
          <thead>
            <tr>
              <th scope="col">Program ID</th>
              <th scope="col">Program Name</th>
              <th scope="col">Program type</th>
              <th scope="col">Disaster Name</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>  
            <tr>
              <td>hello</td>
              <td>hello</td>
              <td>hello</td>
              <td>hello</td>
              <td>hello</td>
              <td>hello</td>
              <td>
              <button type="button" style={{"background":"#89bd79", "borderRadius":"5px", "borderStyle":"none"}}>Register</button>
              <button type="button" style={{"background":"#ff392e", "borderRadius":"5px", "borderStyle":"none"}}>Leave</button>

              </td>
            </tr>   
          </tbody>
        </table>
        </div>

                </div>
        
    </>
  )
}

export default Users_Relief_Programs