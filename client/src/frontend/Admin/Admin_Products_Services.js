import React from 'react'
import Header from '../../Extras/Header'
import Admin_sidebar from '../../Extras/Admin_sidebar'

function Admin_Products_Services() {
  return (
    <>
        <Header />
        <Admin_sidebar />
        <div class="card">
          <div className='button'>
          
          
          <button type="button" className="btn btn-primary" id='add_relief_progam'>Remove Product</button>
          
          <button type="button" className="btn btn-primary" id='add_relief_progam'>Edit Product</button>
          <button type="button" className="btn btn-primary" id='add_relief_progam'>Add Product</button>


          </div>
          <table class="table">
        <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product ID</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Category</th>
      <th scope="col">Relief Program</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>100</td>
      <td>Katrina</td>
      <td>Ended</td>
      <td>404</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Jacob</td>
    </tr>
  </tbody>
</table>
        </div>
        <div class="card">
          <div className='button'>
          <button type="button" className="btn btn-primary" id='add_relief_progam'>Remove Service</button>
          
          <button type="button" className="btn btn-primary" id='add_relief_progam'>Edit Service</button>
          <button type="button" className="btn btn-primary" id='add_relief_progam'>Add Service  </button>
          </div>
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Service ID</th>
      <th scope="col">Service Name</th>
      <th scope="col">Service Category</th>
      <th scope="col">Relief Program</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>100</td>
      <td>Katrina</td>
      <td>Ended</td>
      <td>404</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Jacob</td>
    </tr>
  </tbody>
</table>
        </div>

    </>
    
  )
}

export default Admin_Products_Services