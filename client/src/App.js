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
import Users_Relief_Programs from './frontend/Users/Users_Relief_Programs';
import Add_Org from './frontend/Admin/Admin_Org_Opts/View/Add_Org';
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
        <Route path='/Users_Relief_Programs.js' element={<Users_Relief_Programs />} />
      </Routes>
    </Router>
  )
}

export default App;
