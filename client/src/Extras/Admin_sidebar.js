import '../Extras/Admin_sidebar.css';
import { useSelector } from "react-redux";

function Admin_sidebar() {
  const myState = useSelector((state) => state.side_bar_update);
  return (
    myState
  )
}

export default Admin_sidebar