import Image from "next/image";
import { FaRegMoneyBillAlt } from "react-icons/fa";

import styles from "./CourseHighlight.module.css";

const CourseHighlight = () => {
  return (
    <>
      <div>      
        <Image src="/images/1.png" width={528} height={277}/>
        <div className={styles.price}> <FaRegMoneyBillAlt style={{ fontSize: "40px", marginRight: "10px" }}/> <span style={{ fontSize: "25px", fontWeight: "bold" }}>BDT 1000 ৳</span></div>
      </div>
    </>
  );
};

export default CourseHighlight;
