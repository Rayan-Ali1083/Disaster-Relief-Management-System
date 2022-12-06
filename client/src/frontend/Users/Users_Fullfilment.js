import React from 'react'
import Users_Nav from './Users_Nav'

function Users_Fullfilment() {
  return (
    <>
        <Users_Nav/>
        <div className="card" style={{'margin-left':'auto','margin-right':'auto'}}>
          <div className="card-body">
          <table className="table">
        <thead>
            <tr>
            <th scope="col">Product Fullfillment ID</th>
            <th scope="col">Product Commitment ID</th>
            <th scope="col">Quantity Fullfilled</th>
            <th scope="col">Fullfilled Date</th>
            </tr>
        </thead>
        <tbody>  
            <tr>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            </tr>   
        </tbody>
        </table>
        </div>

                </div>
    </>
  )
}

export default Users_Fullfilment