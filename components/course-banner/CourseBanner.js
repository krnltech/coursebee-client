import classNames from "classnames";
import styles from "./CourseBanner.module.css";

const CiurseBanner = () => {
  return (
    <>
      <div className={classNames("container-fluid", styles.courseBanner)}>
        <h2></h2>
        <h4></h4>        
      </div>
    </>
  );
};

export default CiurseBanner;
