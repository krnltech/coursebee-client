import styles from "../styles/CourseDetails.module.css";
import classNames from "classnames";

import HeadComps from "../components/Head";
import CourseBanner from "../components/course-banner/CourseBanner";
import CourseSummary from "../components/course-summary/CourseSummary";
import CourseHighlight from "../components/course-highlight/CourseHighlight";

const CourseDetails = () => {
  return (
    <>
      {/* HeadComps */}
      <section className="layer">
        <HeadComps
          title="Coursebee | Details"
          iconSource="/icon/coursebee.ico"
        />
      </section>

      {/* Main Banner of Course Details */}
      <section className={styles.layer}>
        <CourseBanner
          title="Complete Python Bootcamp"
          secondTitle="Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
          rating={4}
          numberOfRatings="300"
          numberOfStudents="700"
          instructorName="Zahid Hossain"
        />
      </section>
      
      <section className={classNames(styles.layer, "container")}>
        <div className="row">
          <div className="col-md-8">
            <CourseSummary />
          </div>
          <div className="col-md-4">
            <CourseHighlight />
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetails;
