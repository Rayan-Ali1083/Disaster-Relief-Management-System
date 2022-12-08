import React, { useState, useEffect } from 'react'
import Users_Nav from './Users_Nav'
import Axios from 'axios'
import RemoveCookie from '../../hooks/removeCookie';
import SetCookie from '../../hooks/setCookie';
import GetCookie from '../../hooks/getCookie';


function Users_Requirements() {

  const [Rprogramsummary, SetRprogramsummary] = useState([]);

  const [newCommitment,setnewCommitment] = useState({
    Org_id: "", Comm_date:"",E_delv_date:""
    // Product_id: "",Disaster_location_id: "" ,Program_id:"",
  });


  var id = ""
    useEffect(()=>{
        id = GetCookie('usrin')
        {newCommitment.Org_id=id}
    })

    useEffect(() => {
      Axios.post("http://localhost:3001/api/rprogramsummary",{ dash:id}).then((response) => {
        SetRprogramsummary(response.data)
      })
  
    }, [])
    
    const makecommit = (productid,dislocid,prgid) => {
      console.log(productid+"prd")      
      Axios.post("http://localhost:3001/api/makecommit", { prd: productid,dl: dislocid,pid:prgid,commnewCommitment}).then((resultx) => {
        if (resultx.data.message) {
          alert(resultx.data.message);
        }
      })
    };

    let nname, vvalue;

    const handlecommitments = (e) =>{
      nname = e.target.name;
      vvalue = e.target.value;
      setnewCommitment({...newCommitment, [nname]:vvalue});
     
     }

  return (
    <>
      <Users_Nav />
      <div className="card" style={{ 'margin-left': 'auto', 'margin-right': 'auto' }}>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Program Name</th>
                <th scope="col">Product Name</th>
                <th scope="col">Disaster Location</th>
                <th scope="col">Disaster Name</th>
                <th scope="col">Quantity Requested</th>
                <th scope="col">Quantity Committed</th>
                <th scope="col">Quantity Fullfilled</th>
                <th scope="col">Option</th>
              </tr>
            </thead>
            <tbody>
              {Rprogramsummary.map((val) => (

                <tr>
                  <td>{val.Program_name}</td>
                  <td>{val.Product_name}</td>
                  <td>{val.Location_name}</td>
                  <td>{val.Disaster_name}</td>
                  <td>{val.Total_qty_req}</td>
                  <td>{val.Total_qty_comm}</td>
                  <td>{val.Total_qty_fullfilled}</td>
                  <td><button type="button" class="btn btn-primary" id='add_commitment' data-bs-toggle="modal" data-bs-target="#addDis">Commit</button></td>


                  <div className="modal-centered modal-scrollable modal fade modal-lg" id="addDis" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content" style={{'backgroundColor':'#30574b', 'borderColor':'transparent'}}>
                <div className="modal-header" style={{'backgroundColor':'#30574b', 'borderStyle':'none', 'borderColor':'transparent'}}>
                  <h1 className="modal-title fs-5" id="exampleModalLabel" style={{'color':'white'}}>MAKE COMMITMENT</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body" style={{ "margin": "auto", "width": "100%", "border": "3px solid black", "padding": "5%", 'backgroundColor':'#478484', 'borderRadius':'50px'}}>
                  <div className="d-grid gap-2" >

                  <table className="table" style={{'backgroundColor':'#30574b', 'color':'#fffb00', 'textAlign':'center'}}>
                    <thead >
                      <tr>
                      <th scope="col">Commit Quantity</th>
                      <th scope="col">Current Date</th>
                      <th scope="col">Expected Delivery Date</th>
                      </tr>
                    </thead>
                  <tbody>

                  {/* {newCommitment.Product_id=val.Product_id}
                  {newCommitment.Disaster_location_id=val.Disaster_location_id}
                  {newCommitment.Program_id=val.Program_id} */}
                  
                  <tr style={{'borderBottomColor':'transparent'}}>
                    <td>  <input type="number" min='0' className="form-control" value={newCommitment.Comm_qty} name= 'Comm_qty' onChange={handlecommitments} placeholder="Quantity" aria-label="Username"></input>
                  </td>
                  <td>
                    <input type="date" value={newCommitment.Comm_date} name='Comm_date' onChange={handlecommitments}  ></input></td>
                  
                  <td>
                    <input type="date" value={newCommitment.E_delv_date} name='E_delv_date' onChange={handlecommitments}  ></input></td>
                  

                  <button type="button" onClick={()=>{makecommit(val.id,val.Disaster_location_id,val.Program_id)}} style={{"background":"#89bd79", "borderRadius":"5px", "borderStyle":"none"}}>Add</button>
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






                </tr>
              ))}
              

            
          </tbody>
        </table>
      </div>

    </div>
    </>
  )
}

export default Users_Requirements