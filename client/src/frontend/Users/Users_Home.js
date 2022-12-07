import React ,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Axios from'axios'
import '../Users/Users_home.css'
import Users_Nav from './Users_Nav'
function Users_Home() {


    const { state } = useLocation();
    const [orgname,Setorgname] = useState("") 
    const [orgid,Setorgid] = useState(" ") 
    const [orgstatus,Setorgstatus] = useState("") 
    const [orgcontact,Setorgcontact] = useState(" ") 
    const [orgcategid,Setorgcategid] = useState(" ") 
    const [orgtype,Setorgtype] = useState("") 

  
    useEffect(()=>{
        const{id}= state;
       console.log(id)
        Axios.post("http://localhost:3001/api/orgdetails",{dash:id}).then((response)=>{
           Setorgname(response.data[0].org_name)
           Setorgid(response.data[0].org_id)
           Setorgstatus(response.data[0].org_status)
           Setorgcontact(response.data[0].org_contact)
           Setorgtype(response.data[0].org_type)
           console.log(response.data[0].org_id)
     
         })
        },[])
  return (
    <>
        <Users_Nav/>
        <div style={{"marginTop":"2%"}}>       
            <img className="card-img-top" src={require("../../Extras/side_ad_user.jpg")} alt="ads" style={{"width":"12%", "marginLeft":"1%"}}></img>
            <img className="card-img-top" src={require("../../Extras/side_ad_user.jpg")} alt="ads" style={{"width":"12%", "marginLeft":"87%", "marginTop":"-50%"}}></img>
        <div className="card" style={{"width":"70%", "marginLeft":"15%", "marginTop":"-50%", "borderRadius":"1%"}}>
            <div className="card-body">
                <h3 className="card-title">Organization Details:</h3>
                <div style={{background: 'black', height: '2px',}}/>
                <br></br>
                <div className="card-body" style={{"background":"#e3e1e1", "borderRadius":"1%"}}>
                <div style={{"padding":"3%"}}>
                    <div className="card-text">
                        <h5>Organiztion Name: {orgname.toUpperCase()}
                        <h5 style={{"float":"right"}}>Status: {orgstatus}</h5>
                        </h5>
                    </div>
                </div>

                <div style={{"padding":"3%"}}>
                <div className="card-text">
                        <h5>Organization ID: {orgid}
                        <h5 style={{"float":"right"}}>Organization Contact: {orgcontact}</h5>
                        </h5>
                    </div>
                </div>

                <div style={{"padding":"3%"}}>
                    <div className="card-text">
                        <h5>Organization Category ID: ORG_CAT_002
                        <h5 style={{"float":"right"}}>Organization type: {orgtype}</h5>
                        </h5>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Users_Home