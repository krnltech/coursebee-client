import styles from "../styles/Home.module.css";
import classNames from "classnames";
import { Button } from "react-bootstrap";

import HeadComps from "../components/Head";
import CourseBanner from "../components/course-banner/CourseBanner";

const CourseDetails = () => {
  return (  
    <>
      {/* HeadComps */}
      <section className="layer">
        <HeadComps title="Coursebee | Details" iconSource="/icon/coursebee.ico" />
      </section>

      {/* Main Banner of Course Details */}
      <section className={styles.layer}>
        < CourseBanner />
      </section>
    </>
  );
}
 
export default CourseDetails;