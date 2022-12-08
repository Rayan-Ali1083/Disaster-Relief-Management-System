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
  var id = ""
  useEffect(()=>{
    id = GetCookie('usrin')
    Axios.get("http://localhost:3001/api/fullfilldetails").then((response)=>{
     
      Setfullfilldet(response.data)
     })
    },[])

   

    


     return (
      <>
        <Users_Nav />
        <div className="card" style={{ 'margin-left': 'auto', 'margin-right': 'auto' }}>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">FULLFILLMENT ID</th>
                  <th scope="col">COMMITMENT ID</th>
                  <th scope="col">QUANTITY FULLFILLED</th>
                  <th scope="col">FULLFILLED DATE</th>
                </tr>
              </thead>
              <tbody>
                {fullfilldet.map((val) => (
  
                  <tr>
                    <td>{val.p_fullfillment_id}</td>
                    <td>{val.p_commitment_id}</td>
                    <td>{val.Quantity_fullfilled}</td>
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