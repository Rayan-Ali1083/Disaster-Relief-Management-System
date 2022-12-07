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

  useEffect(()=>{
    
  })
  const [newProduct,setnewProduct] = useState({
    product_name: "", product_cate: "" 
  });

  let name, value;

  const handleIn = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setnewProduct({...newProduct, [name]:value});
   
   }
   const addProduct = ()=>{
    Axios.post("http://localhost:3001/api/addProd",{prod:newProduct}).then((resultx)=>{
      if(resultx.data.message){
        alert(resultx.data.message);
        newProduct.product_name.value=" "
      }else{
        alert(resultx.data.message1);
      }
    })
  };

  const [prodinfo,Setprodinfo] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/productsinfo").then((response)=>{
      Setprodinfo(response.data)
      //console.log(response.data)

    })

  },[])

  const Remove_Prod = (product_id)=>{
    Axios.post("http://localhost:3001/api/remproducts",{user:product_id}).then((resultx)=>{
      if(resultx.data.message){
        alert(resultx.data.message);
      }
    })
  };
  return (
    <>
        <Header />
        <Admin_sidebar />
        <div className="card" style={{'backgroundColor':'#30574b', 'color':'#fffb00'}}>
          <div className='button'>
          
          <button type="button" className="btn" id='add_relief_program' data-bs-toggle="modal" data-bs-target="#remProd">Remove Product</button>

          <div className="modal-centered modal-scrollable modal fade modal-lg" id="remProd" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content" style={{'backgroundColor':'#30574b', 'borderStyle':'none', 'borderColor':'transparent'}}>
                        <div className="modal-header" style={{'backgroundColor':'#30574b', 'borderStyle':'none', 'borderColor':'transparent'}}>
                          <h1 className="modal-title fs-5" id="exampleModalLabel" style={{'color':'white'}}>REMOVE PRODUCTS</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body"  style={{ "margin": "auto", "width": "100%", "border": "3px solid black", "padding": "5%", 'backgroundColor':'#478484', 'borderRadius':'50px'}}>
                            <div className="d-grid gap-2">
                            <table className="table" style={{'backgroundColor':'#30574b', 'color':'#fffb00', 'textAlign':'center'}}>
                              <thead>
                                  <tr>
                                  <th scope="col">Product ID</th>
                                  <th scope="col">Product Name</th>
                                  <th scope="col">Product Category</th>
                                  <th scope="col">Option</th>
                                  </tr>
                              </thead>
                                  <tbody style={{'color':'white'}}>
                                  {prodinfo.map((val=>
                                      <tr>
                                          <td>{val.Product_id}</td>
                                          <td >{val.Product_name}</td>
                                          <td >{val.Product_category}</td>
                                          <td><button type="button" onClick={()=>{Remove_Prod(val.Product_id)}} id='removebtn'>REMOVE</button></td>

                                      </tr>
                                  ) )}
                                    
                                  </tbody>
                              </table>
                            
                            

                               
                              </div>                                  
                        </div>
                        <div className="modal-footer" style={{'backgroundColor':'#30574b', 'borderColor':'white', 'marginTop':'5%'}}>
                          <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Go Back</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="button" className="btn" id='add_relief_program'  data-bs-toggle="modal" data-bs-target="#editProd">Edit Product</button>

                  <div className="modal-centered modal-scrollable modal fade modal-lg" id="editProd" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content" style={{'backgroundColor':'#30574b', 'borderStyle':'none', 'borderColor':'transparent'}}>
                        <div className="modal-header" style={{'backgroundColor':'#30574b', 'borderStyle':'none', 'borderColor':'transparent'}}>
                          <h1 className="modal-title fs-5" id="exampleModalLabel" style={{'color':'white'}}>EDIT PRODUCTS</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body"  style={{ "margin": "auto", "width": "100%", "border": "3px solid black", "padding": "5%", 'backgroundColor':'#478484', 'borderRadius':'50px'}}>
                            <div className="d-grid gap-2">
                            <table className="table" style={{'backgroundColor':'#30574b', 'color':'#fffb00', 'textAlign':'center'}}>
                              <thead>
                              <tr>
                              <th scope="col">Product ID</th>
                              <th scope="col">Product Name</th>
                              <th scope="col">Product Category</th>
                              <th scope="col">Option</th>
                              </tr>
                              </thead>
                                  <tbody style={{'color':'white'}}>
                                  <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><button type="button" style={{"background":"#89bd79", "borderRadius":"5px", "borderStyle":"none"}}>ADD</button></td>

                                  </tr>
                                    
                                  </tbody>
                              </table>
                            
                            

                              
                              </div>                                  
                        </div>
                        <div className="modal-footer" style={{'backgroundColor':'#30574b', 'borderColor':'white', 'marginTop':'5%'}}>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Go Back</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="button" className="btn" id='add_relief_program'  data-bs-toggle="modal" data-bs-target="#addProd">Add Product</button>

                  <div className="modal-centered modal-scrollable modal fade modal-lg" id="addProd" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content" style={{'backgroundColor':'#30574b', 'borderStyle':'none', 'borderColor':'transparent'}}>
                        <div className="modal-header" style={{'backgroundColor':'#30574b', 'borderStyle':'none', 'borderColor':'transparent'}}>
                          <h1 className="modal-title fs-5" id="exampleModalLabel" style={{'color':'white'}}>ADD PRODUCTS</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body"  style={{ "margin": "auto", "width": "100%", "border": "3px solid black", "padding": "5%", 'backgroundColor':'#478484', 'borderRadius':'50px'}}>
                            <div className="d-grid gap-2">
                            <table className="table" style={{'backgroundColor':'#30574b', 'color':'#fffb00', 'textAlign':'center'}}>
                              <thead>
                              <tr>
                              <th scope="col">Product ID</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Category</th>
                                <th scope="col">Option</th>
                              </tr>
                              </thead>
                                  <tbody style={{'color':'white'}}>
                                  <tr>
                                    <td><input  placeholder='Example 001'></input></td>
                                    <td><input value={newProduct.product_name} name='product_name' onChange={handleIn} placeholder='Example Milk'></input></td>
                                    <td><input value={newProduct.product_cate} name='product_cate'onChange={handleIn} placeholder='Example Food'></input></td>
                                    <td><button type="button" onClick={addProduct} style={{"background":"#89bd79", "borderRadius":"5px", "borderStyle":"none"}}>ADD</button></td>
                                  </tr>
                                    
                                  </tbody>
                              </table>
                              </div>                                  
                        </div>
                        <div class="modal-footer" style={{"backgroundColor": "rgb(48, 87, 75)", "borderColor": 'white', 'marginTop': '5%'}}>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Go Back</button>
                  </div>                        </div>
                      </div>
                    </div>





          </div>
          <table className="table">
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