import React, { useState, useEffect } from 'react'
import Users_Nav from './Users_Nav'
import Axios from 'axios'


function Users_Requirements() {

  const [Rprogramsummary, SetRprogramsummary] = useState([]);


  useEffect(() => {
    Axios.get("http://localhost:3001/api/rprogramsummary").then((response) => {
      SetRprogramsummary(response.data)
    })

  }, [])



  return (
    <>
      <Users_Nav />
      <div className="card" style={{ 'margin-left': 'auto', 'margin-right': 'auto' }}>
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
              {Rprogramsummary.map((val) => (

                <tr>
                  <td>{val.Program_name}</td>
                  <td>{val.Product_name}</td>
                  <td>{val.Location_name}</td>
                  <td>{val.Disaster_name}</td>
                  <td>{val.Total_qty_req}</td>
                  <td>{val.Total_qty_comm}</td>
                  <td>{val.Total_qty_fullfilled}</td>
                  <td><button type="button" class="btn btn-primary">Commit</button></td>
                </tr>
              ))}
              

            
          </tbody>
        </table>
      </div>

    </div>
    </>
  )
}

export default Users_Requirements