import SideNav from "../components/sidebar/SideNav";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/sidebar/Content";
import CourseUpload from "../components/course-upload/course-upload";
import dynamic from "next/dynamic";
// const CourseUpload = dynamic(() => import("../components/course-upload/course-upload"), {
//   ssr: false,
// });

const MentorDashboard = () => {
  return (
    <>
      <div className="d-flex" id="wrapper">
        <Sidebar />

        <div id="page-content-wrapper">
          {/* <SideNav /> */}
          <div className="container-fluid">
            {/*<Content />*/}
            <CourseUpload/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorDashboard;
