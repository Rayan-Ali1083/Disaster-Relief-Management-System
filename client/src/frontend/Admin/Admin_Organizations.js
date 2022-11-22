import React from 'react'
import Header from '../../Extras/Header'
import Admin_sidebar from '../../Extras/Admin_sidebar'

function Admin_Organizations() {
  return (
    <>
        <Header />
        <Admin_sidebar />
        <div class="card">
          <div className='button'>
          
          <button type="button" className="btn btn-primary" id='add_relief_progam'>Add Organization Category</button>
          <button type="button" className="btn btn-primary" id='add_relief_progam'>Add Organization</button>
          <button type="button" className="btn btn-primary" id='add_relief_progam'>Remove Organization</button>
          </div>
          
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Organization ID</th>
      <th scope="col">Organization Name</th>
      <th scope="col">Organization type</th>
      <th scope="col">Organization Status</th>
      <th scope="col">Relief Programs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>100</td>
      <td>Katrina</td>
      <td>11/21/2022</td>
      <td>404</td>
      <td>404</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>1/10/2002</td>
      <td>Jacob</td>
      <td>Jacob</td>

    </tr>
  </tbody>
</table>
        </div>
        
    </>
  )
}

export default Admin_Organizations