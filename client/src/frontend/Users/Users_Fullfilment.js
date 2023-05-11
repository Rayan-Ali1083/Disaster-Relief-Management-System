import React, { useEffect, useState } from 'react'
import Users_Nav from './Users_Nav'
import Axios from 'axios'
import RemoveCookie from '../../hooks/removeCookie';
import SetCookie from '../../hooks/setCookie';
import GetCookie from '../../hooks/getCookie';

function Users_Fullfilment() {

  const [newfullfillment,setnewfullfillment] = useState({
    P_fullfillment_id: "", P_commitment_id: "",Qty_fullfilled: 0 ,Fullfilled_data:""
  });

  const [fullfilldet,Setfullfilldet] = useState([])
  var id = " "
  useEffect(()=>{
    id = GetCookie('usrin')
    console.log(id)
    Axios.post("http://localhost:3001/api/fullfilldetails",{dash:id}).then((response)=>{
     console.log(response.data)
      Setfullfilldet(response.data)
     })
    },[])

   

    


     return (
      <>
        <Users_Nav />
        <div className="card" style={{"width":"70%", "marginLeft":"15%", "borderRadius":"1%", 'backgroundColor':'transparent', 'borderStyle':'none'}}>
        <div className="card-body" style={{'borderStyle':'solid', 'borderColor':'black' }}>
        <table className="table" style={{'backgroundColor':'#30574b', 'color':'#fffb00','borderStyle':'none', 'textAlign':'center'}}>
        <thead style={{'borderStyle':'solid'}}>
                <tr>
                  {/* <th scope="col">FULLFILLMENT ID</th> */}
                  <th scope="col">Relief Program</th>
                  <th scope="col">Product</th>
                  <th scope="col">QUANTITY FULLFILLED</th>
                  <th scope="col">FULLFILLED DATE</th>
                </tr>
              </thead>
              <tbody style={{'color':'white', 'fontWeight':'bold'}}>
                {fullfilldet.map((val) => (
  
                  <tr>
                    {/* <td>{val.p_fullfillment_id}</td> */}
                    <td>{val.program_name}</td>
                    <td>{val.product_name}</td>
                    <td>{val.Qty_fullfilled}</td>
                    <td>{val.Fullfilled_date}</td>

  
                  </tr>
                ))}
                
  
              
            </tbody>
          </table>
        </div>
  
      </div>
      </>
    )
}

export default Users_Fullfilment