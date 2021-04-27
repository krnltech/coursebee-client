import Sidebar from "../../components/sidebar/Sidebar";


const MentorDashboard = () => {
  return (
    <>
      <div className="d-flex" id="wrapper">
        <Sidebar />

        <div id="page-content-wrapper">
          <div className="container-fluid">
            About
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorDashboard;
