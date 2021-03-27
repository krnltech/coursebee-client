import Sidebar from "../components/sidebar/Sidebar";
import { useSelector,useDispatch } from "react-redux";

const MentorDashboard = () => {
    const { user,isAuthenticated } = useSelector((state) => state.auth.user);
    console.log(user.user.email,isAuthenticated)
  return (
    <>
      <Sidebar />
      <h1>Successful</h1>
        <h5>{user.email}</h5>
        <h5>{user.type}</h5>
        <h5>{user.fullname}</h5>
    </>
  );
};

export default MentorDashboard;
