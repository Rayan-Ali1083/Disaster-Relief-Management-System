import React ,{useState,useEffect} from 'react'
import Header from '../../Extras/Header'
import Admin_sidebar from '../../Extras/Admin_sidebar'
import Axios from 'axios'
import { Link } from 'react-router-dom';

function Admin_Products_Services() {

  const [productsdet,Setproductsdet] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/productsinfo").then((response)=>{
      Setproductsdet(response.data)
      //console.log(response.data)

    })

  },[])



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
      
      <th scope="col">Product ID</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Category</th>
      

    </tr>
  </thead>
  <tbody>

{productsdet.map((val)=>(
  <tr>
   
   <td>{val.Product_id}</td>
   <td>{val.Product_name}</td>
   <td>{val.Product_category}</td>
 </tr>


    ))}
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
    </tr>
  </thead>
  <tbody>
     <tr>
      <th scope="row">1</th>
      <td>100</td>
      <td>Katrina</td>
      <td>Ended</td>
    </tr>
    <tr>
      <th scope="row">2</th>
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

export default Admin_Products_Services