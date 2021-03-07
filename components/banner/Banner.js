import styles from "./Banner.module.css";
import classNames from "classnames";
import { BsListNested } from "react-icons/bs";

const Banner = ({ source }) => {
  return (
    <>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url(${source})`,
        }}
      >
      
        <div className={styles.bannerTitle}>
          <img src="/logo/cb-logo.png" alt="" className={styles.logo} />
          <h5 className="mb-4 pl-4">
            Explore our schools to find your perfect program
          </h5>
          <a href="#" className={classNames(styles.customBtn, "ml-4")}>
            All Courses
          </a>
        </div>

      </div>
    </>
  );
};

export default Banner;
