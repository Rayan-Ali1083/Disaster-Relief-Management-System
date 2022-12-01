import React ,{useState,useEffect} from 'react'
import Axios from 'axios'
function Remove_Products() {

  const [prodinfo,Setprodinfo] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/productsinfo").then((response)=>{
      Setprodinfo(response.data)
      //console.log(response.data)

    })

  })

  const Remove_Prod = (product_id)=>{
    Axios.post("http://localhost:3001/api/remproducts",{user:product_id}).then((resultx)=>{
      if(resultx.data.message){
        alert(resultx.data.message);
      }
    })
  };

  return (
    <>
    <div className="card" style={{"margin": "auto", "width": "100%","border": "10px solid green","padding":"5%"}}>
        <h3>REMOVE PRODUCTS</h3>
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
            {prodinfo.map((val=>
                 <tr>
                    <td>{val.Product_id}</td>
                    <td >{val.Product_name}</td>
                    <td >{val.Product_category}</td>
                    <td><button type="button" onClick={()=>{Remove_Prod(val.Product_id)}} style={{"background":"#ff392e", "borderRadius":"5px", "borderStyle":"none"}}>REMOVE</button></td>

                </tr>
             ) )}
               
            </tbody>
            </table>
            <p>all products will be visible here and remove button will delete all details of the product</p>
        </div>
    </>
  )
}

export default Remove_Products