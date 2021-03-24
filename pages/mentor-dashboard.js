import Sidebar from "../components/sidebar/Sidebar";
import { useSelector,useDispatch } from "react-redux";

const MentorDashboard = () => {
    const { user,isAuthenticated } = useSelector((state) => state.auth);
    console.log(user,isAuthenticated)
  return (
    <>
      <Sidebar />
      <h1>Successful</h1>
    </>
  );
};

export default MentorDashboard;
