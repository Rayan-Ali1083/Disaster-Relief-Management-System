import React ,{useState,useEffect} from 'react'
import Header from '../../Extras/Header'
import Admin_sidebar from '../../Extras/Admin_sidebar'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import './admin_relief_program.css'
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
        <div class="card" style={{'backgroundColor':'#30574b', 'color':'#fffb00'}}>
          <div className='button'>
          
          <Link to={"/Remove_Products.js"}><button type="button" className="btn" id='add_relief_program'>Remove Product</button></Link>
          <Link to={"/Edit_Products.js"}><button type="button" className="btn" id='add_relief_program'>Edit Product</button></Link>
          <Link to={"/Add_Products.js"}><button type="button" className="btn" id='add_relief_program'>Add Product</button></Link>



          </div>
          <table class="table">
        <thead>
    <tr  style={{'backgroundColor':'#30574b', 'color':'#fffb00', 'textAlign':'center'}}>
      
      <th scope="col">Product ID</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Category</th>
      

    </tr>
  </thead>
  <tbody>

{productsdet.map((val)=>(
  <tr style={{'backgroundColor':'#30574b', 'color':'white', 'textAlign':'center', 'fontWeight': 'bold'}}>
   
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