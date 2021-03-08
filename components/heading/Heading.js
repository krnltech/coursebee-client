import styles from "./Heading.module.css";
import classNames from "classnames";

const Heading = ({ headerText }) => {
  return (
    <>
      <h2 className={classNames(styles.sectionTitle, styles.title)}>
        <span>{headerText}</span>
      </h2>
    </>
  );
};

export default Heading;
