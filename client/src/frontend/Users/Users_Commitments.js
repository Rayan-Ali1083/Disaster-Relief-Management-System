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

    const [newfullfillment,setnewfullfillment] = useState({
       Qty_fullfilled: 0 ,Fullfilled_date:""
      //  p_commitment_id: "",
    });

    


    let nname, vvalue;

    const handlefullfillments = (e) =>{
      nname = e.target.name;
      vvalue = e.target.value;
      setnewfullfillment({...newfullfillment, [nname]:vvalue});
     

     }

     const makefullfillment = (commid) => {
      Axios.post("http://localhost:3001/api/makefullfillment", { commitmentid:commid,fullf: newfullfillment }).then((resultx) => {
        if (resultx.data.message) {
          alert(resultx.data.message);
        }
      })
    };

  
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
                        <td><button type="button" class="btn btn-primary" id='add_commitment' data-bs-toggle="modal" data-bs-target="#addDis">Fullfil</button></td>

                        <div className="modal-centered modal-scrollable modal fade modal-lg" id="addDis" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content" style={{'backgroundColor':'#30574b', 'borderColor':'transparent'}}>
                <div className="modal-header" style={{'backgroundColor':'#30574b', 'borderStyle':'none', 'borderColor':'transparent'}}>
                  <h1 className="modal-title fs-5" id="exampleModalLabel" style={{'color':'white'}}>MAKE FULLFILLMENT</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body" style={{ "margin": "auto", "width": "100%", "border": "3px solid black", "padding": "5%", 'backgroundColor':'#478484', 'borderRadius':'50px'}}>
                  <div className="d-grid gap-2" >

                  <table className="table" style={{'backgroundColor':'#30574b', 'color':'#fffb00', 'textAlign':'center'}}>
                    <thead >
                      <tr>
                      <th scope="col">Quantity Fullfilling</th>
                      <th scope="col">Fullfilled Date</th>
                      
                      </tr>
                    </thead>
                  <tbody>

                  {/* {newfullfillment.p_commitment_id=val.p_commitment_id} */}
                  {/* {newCommitment.Disaster_location_id=val.Disaster_location_id}
                  {newCommitment.Program_id=val.Program_id} */}
                  
                  <tr style={{'borderBottomColor':'transparent'}}>
                    <td>  <input type="number" min='0' className="form-control" value={newfullfillment.Qty_fullfilled} name= 'Qty_fullfilled' onChange={handlefullfillments} placeholder="Quantity" aria-label="Username"></input>
                  </td>
                  <td>
                    <input type="date" value={newfullfillment.Fullfilled_date} name='Fullfilled_date' onChange={handlefullfillments}  ></input></td>
                  
                 
                  

                  <button type="button" onClick={()=>{makefullfillment(val.p_commitment_id)}} style={{"background":"#89bd79", "borderRadius":"5px", "borderStyle":"none"}}>Add</button>
              </tr>
            
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