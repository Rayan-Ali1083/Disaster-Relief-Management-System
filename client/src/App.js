import Login_page from './frontend/Login/Login_page'
import Signup from './frontend/Signup/Signup'
import Header from './Extras/Header'
import Admin_Home  from './frontend/Admin/Admin_Home';
import Admin_Organizations from './frontend/Admin/Admin_Organizations';
import Admin_Products_Services from './frontend/Admin/Admin_Products_Services';
import Admin_Relief_Program from './frontend/Admin/Admin_Relief_Program';
import Admin_sidebar from './Extras/Admin_sidebar';
import Admin_Disaster from './frontend/Admin/Admin_Disaster'
import Users_Home from './frontend/Users/Users_Home';
import Add_Org from './frontend/Admin/Admin_Org_Opts/Add_Org';
import Remove_Org from './frontend/Admin/Admin_Org_Opts/Remove_Org';
import Add_Products from './frontend/Admin/Admin_Prod_Ser_Opts/Add_Products';
import Edit_Products from './frontend/Admin/Admin_Prod_Ser_Opts/Edit_Products';
import Remove_Products from './frontend/Admin/Admin_Prod_Ser_Opts/Remove_Products';
import Create_Relief_Prog from './frontend/Admin/Admin_Relief_Opts/Create_Relief_Prog';
import Users_Relief_Programs from './frontend/Users/Users_Relief_Programs';
import Add_Disaster from './frontend/Admin/Admin_Disaster_Opts/Add_Disaster';
import Disaster_Dashboard from './frontend/Admin/Admin_Disaster_Opts/Disaster_Dashboard';
import Relief_Dashboard from './frontend/Admin/Admin_Relief_Opts/Relief_Dashboard';
import React from 'react';
import './App.css'
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login_page />} />
        <Route path="/Signup.js" element={<Signup />} />
        <Route path='/Header.js' element={<Header />} />
        <Route path='/Admin_Home.js' element={<Admin_Home />} />
        <Route path='/Admin_sidebar.js' element={<Admin_sidebar />} />
        <Route path='/Admin_Organizations.js' element={<Admin_Organizations />} />
        <Route path='/Admin_Products_Services.js' element={<Admin_Products_Services />} />
        <Route path='/Admin_Relief_Program.js' element={<Admin_Relief_Program />} />
        <Route path='/Admin_Disaster.js' element={<Admin_Disaster />} />
        <Route path='/Users_Home.js' element={<Users_Home />} />
        <Route path='/Add_Org.js' element={<Add_Org />} />
        <Route path='/Remove_Org.js' element={<Remove_Org />} />
        <Route path='/Users_Relief_Programs.js' element={<Users_Relief_Programs />} />
        <Route path='/Add_Products.js' element={<Add_Products />} />
        <Route path='/Edit_Products.js' element={<Edit_Products />} />
        <Route path='/Remove_Products.js' element={<Remove_Products />} />
        <Route path='/Create_Relief_Prog.js' element={<Create_Relief_Prog />} />
        <Route path='/Add_Disaster.js' element={<Add_Disaster />} />
        <Route path='/Disaster_Dashboard.js' element={<Disaster_Dashboard />} />
        <Route path='/Relief_Dashboard.js' element={<Relief_Dashboard />} />
        
      </Routes>
    </Router>
  )
}

export default App;
