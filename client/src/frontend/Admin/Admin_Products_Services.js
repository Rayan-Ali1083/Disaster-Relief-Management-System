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
          
          <Link to={"/Remove_Products.js"}><button type="button" className="btn btn-primary" id='add_relief_progam'>Remove Product</button></Link>
          <Link to={"/Edit_Products.js"}><button type="button" className="btn btn-primary" id='add_relief_progam'>Edit Product</button></Link>
          <Link to={"/Add_Products.js"}><button type="button" className="btn btn-primary" id='add_relief_progam'>Add Product</button></Link>



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
    </>
    
  )
}

export default Admin_Products_Services