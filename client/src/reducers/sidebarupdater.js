import '../Extras/Admin_sidebar.css'

const initialState = () =>{
    return(
        <>
        <div className="sidenav">
            <a href="#WHOAREWE">Who Are We</a>
            <a href="#ANALYSIS">Active Programs</a>
            <a href="#ABOUT">Meet The eam</a>
            <a href="#CONTACT">Contact</a>
        </div>
    </>
    )
}

const admin_products_services = () =>{
    return(
        <>
            <div className="sidenav">
                <a href="#overall">Overall</a>
                <a href="#analysis">Analysis- filter by organization</a>    
            </div>
        </>
    )
}

const admin_organization = () =>{
    return(
        <>
        <div className="sidenav">
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search ORGANIZATION" aria-label="Search"></input>
                <button className="btn btn-outline-success my-1 my-sm-0" type="submit">Search</button>
            </form>
            <a href="#filters">Filters</a>
        </div>
    </>
    )
}
const admin_relief_program = () =>{
    return(
        <>
        <div className="sidenav">
            <a href='#feedback'>Send us your FEEDBACK</a>
        </div>
        
    </>
    )
}
const side_bar_update = (state = initialState(), action) =>{
    switch(action.type){
        case "admin_home": return initialState();
        case "admin_products_services": return admin_products_services();
        case "admin_organization": return admin_organization();
        case "admin_relief_program": return admin_relief_program();
        default: return initialState();
    }
}

export default side_bar_update;