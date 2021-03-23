import SideNav from "../components/sidebar/SideNav";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/sidebar/Content";

const MentorDashboard = () => {
  return (
    <>
      <div className="d-flex" id="wrapper">
        <Sidebar />

        <div id="page-content-wrapper">
          {/* <SideNav /> */}
          <div className="container-fluid">
            <Content />
          </div>
        </div>
        
      </div>
   
    </>
  );
};

export default MentorDashboard;
