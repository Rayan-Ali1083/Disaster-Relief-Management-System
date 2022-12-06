import React, {useState,useEffect} from 'react'
import Axios from 'axios'
function Add_Products() {


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
  return (
    <>
        <div className="card" style={{"margin": "auto", "width": "100%","border": "10px solid green","padding":"5%"}}>
        <h3>ADD PRODUCTS</h3>
          <table className="table">

        <thead>
            <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Category</th>
            <th scope="col">Option</th>
            </tr>
        </thead>
            <tbody>
                <tr>
                    <td><input  placeholder='Example 001'></input></td>
                    <td><input value={newProduct.product_name} name='product_name' onChange={handleIn} placeholder='Example Milk'></input></td>
                    <td><input value={newProduct.product_cate} name='product_cate'onChange={handleIn} placeholder='Example Food'></input></td>
                    <td><button type="button" onClick={addProduct} style={{"background":"#89bd79", "borderRadius":"5px", "borderStyle":"none"}}>ADD</button></td>

                </tr>
            </tbody>
            </table>
        </div>
    </>
  )
}

export default Add_Products