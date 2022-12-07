import React from 'react'
import Users_Nav from './Users_Nav'

function Users_Commitments() {
  return (
    <>
        <Users_Nav/>
        <div className="card" style={{'margin-left':'auto','margin-right':'auto'}}>
                <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Product Commitment ID</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Disaster Location Name</th>
                        <th scope="col">Program Name</th>
                        <th scope="col">Committed Quantity</th>
                        <th scope="col">Committed Date</th>
                        <th scope="col">ETA</th>
                        <th scope="col">Status</th>
                        <th scope="col">Options</th>
                        
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
                        <td>hello</td>
                        <td>hello</td>
                        <td><button type="button" class="btn btn-primary">Fullfil</button></td>
                        </tr>   
                    </tbody>
</table>
</div>

        </div>
    </>
  )
}

export default Users_Commitments