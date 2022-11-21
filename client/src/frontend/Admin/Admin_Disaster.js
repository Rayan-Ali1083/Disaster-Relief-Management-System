import React from 'react'
import Header from '../../Extras/Header'
import Admin_sidebar from '../../Extras/Admin_sidebar'
import './admin_relief_program.css'

function Admin_Disaster() {
  return (
    <>
        <Header/>
        <Admin_sidebar />
        <div class="card">
          <div className='button'>
          <button type="button" className="btn btn-primary" id='add_relief_progam'>Create Disaster</button>
          <button type="button" className="btn btn-primary" id='add_relief_progam'>Success</button>
          </div>
          
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Disaster ID</th>
      <th scope="col">Disaster Name</th>
      <th scope="col">Disaster date</th>
      <th scope="col">Disaster type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>100</td>
      <td>Katrina</td>
      <td>11/21/2022</td>
      <td>404</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>1/10/2002</td>
      <td>Jacob</td>

    </tr>
  </tbody>
</table>
        </div>
        
    </>
  )
}

export default Admin_Disaster