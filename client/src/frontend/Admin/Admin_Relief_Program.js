import React from 'react'
import Header from '../../Extras/Header'
import Admin_sidebar from '../../Extras/Admin_sidebar'
import './admin_relief_program.css'

function Admin_Relief_Program() {
  return (
    <>
        <Header/>
        <Admin_sidebar />
        <div class="card">
          <div className='button'>
            <button type="button" className="btn btn-primary" id='add_relief_progam'>Success</button>
          </div>
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Program ID</th>
      <th scope="col">Program Name</th>
      <th scope="col">Program Status</th>
      <th scope="col">Disaster ID</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>100</td>
      <td>Katrina</td>
      <td>Ended</td>
      <td>404</td>
      <td>11/19/2022</td>
      <td>01/15/2023</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>
        </div>
        
    </>
  )
}

export default Admin_Relief_Program