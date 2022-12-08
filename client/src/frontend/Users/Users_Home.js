import React ,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Axios from'axios'
import '../Users/Users_home.css'
import Users_Nav from './Users_Nav'
import RemoveCookie from '../../hooks/removeCookie';
import SetCookie from '../../hooks/setCookie';
import GetCookie from '../../hooks/getCookie';
function Users_Home() {


    const { state } = useLocation();
    const [orgname,Setorgname] = useState("") 
    const [orgid,Setorgid] = useState(" ") 
    const [orgstatus,Setorgstatus] = useState("") 
    const [orgcontact,Setorgcontact] = useState(" ") 
    const [orgcategid,Setorgcategid] = useState(" ") 
    const [orgtype,Setorgtype] = useState("") 
    var id = ""
    useEffect(()=>{
        id = GetCookie('usrin')
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
        <div className="card" style={{"width":"70%", "marginLeft":"15%", "borderRadius":"1%", 'backgroundColor':'transparent', 'borderStyle':'none'}}>
            <div className="card-body" style={{'borderColor':'black', 'borderStyle':'solid'}}>
                <h3 className="card-title">Organization Details:</h3>
                <div style={{background: 'white', height: '2px',}}/>
                <br></br>
                <div className="card-body" style={{"background":"#478484", "borderRadius":"50px"}}>
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