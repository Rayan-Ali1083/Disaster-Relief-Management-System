import React, { useEffect, useState } from 'react'
import Users_Nav from './Users_Nav'
import Axios from 'axios'
import RemoveCookie from '../../hooks/removeCookie';
import SetCookie from '../../hooks/setCookie';
import GetCookie from '../../hooks/getCookie';
function Users_Commitments() {


  const [commdet,Setcommdet] = useState([])
  var id = ""
  useEffect(()=>{
    id = GetCookie('usrin')
    Axios.post("http://localhost:3001/api/commdetails",{dash:id}).then((response)=>{
     
    Setcommdet(response.data)
     })
    },[])

  return (
    <>
        <Users_Nav/>
        <div className="card" style={{"width":"70%", "marginLeft":"15%", "borderRadius":"1%", 'backgroundColor':'transparent', 'borderStyle':'none'}}>
        <div className="card-body" style={{'borderStyle':'solid', 'borderColor':'black' }}>
        <table className="table" style={{'backgroundColor':'#30574b', 'color':'#fffb00','borderStyle':'none', 'textAlign':'center'}}>
        <thead style={{'borderStyle':'solid'}}>
                        <tr>
                        <th scope="col">Product Commitment ID</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Disaster Location Name</th>
                        <th scope="col">Program Name</th>
                        <th scope="col">Committed Quantity</th>
                        <th scope="col">Committed Date</th>
                        <th scope="col">ETA</th>
                        <th scope="col">Status</th>
                        <th scope="col">Options</th>
                        
                        </tr>
                    </thead>
                    <tbody style={{'color':'white', 'fontWeight':'bold'}}>
                      {commdet.map((val)=>(

                      <tr>
                        <td>{val.p_commitment_id}</td>
                        <td>{val.product_name}</td>
                        <td>{val.location_name}</td>
                        <td>{val.program_name}</td>
                        <td>{val.comm_qty}</td>
                        <td>{val.comm_date}</td>
                        <td>{val.exp_delivery_date}</td>
                        <td>{val.status}</td>
                        <td><button type="button" class="btn" id='bttn'>Fullfil</button></td>
                        </tr>   

                      ))}
                  
                    </tbody>
</table>
</div>

        </div>
    </>
  )
}

export default Users_Commitments