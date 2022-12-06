import React from 'react'
import Users_Nav from './Users_Nav'

function Users_Requirements() {
  return (
    <>
            <Users_Nav/>
            <div className="card" style={{'margin-left':'auto','margin-right':'auto'}}>
                <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Program Name</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Disaster Location</th>
                        <th scope="col">Disaster Name</th>
                        <th scope="col">Quantity Requested</th>
                        <th scope="col">Quantity Committed</th>
                        <th scope="col">Quantity Fullfilled</th>
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
                        <td>hello</td>
                        <td><button type="button" class="btn btn-primary">Commit</button></td>

                        </tr>   
                    </tbody>
</table>
</div>

        </div>
    </>
  )
}

export default Users_Requirements