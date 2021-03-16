import Image from "next/image";
import styles from "./CourseHighlight.module.css";
import { Button } from "react-bootstrap";

import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiVideoLine } from "react-icons/ri";
import { AiOutlineFile, AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiCodeCurly, BiMobileAlt } from "react-icons/bi";
import { CgInfinity } from "react-icons/cg";
import { GrLanguage } from "react-icons/gr";

const CourseHighlight = () => {
  return (
    <>
      <div className={styles.highlight}>
        <Image src="/images/1.png" width={528} height={277} />

        <div className={styles.price}>
          <FaRegMoneyBillAlt
            style={{ fontSize: "40px", marginRight: "10px" }}
          />
          <span style={{ fontSize: "25px", fontWeight: "bold" }}>
            BDT ১০০০ ৳
          </span>
        </div>

        <Button className={styles.button} variant="info">
          Add To Cart
        </Button>

        <div className={styles.inclution}>

          <h5 className={styles.title}>
            <span>This Course Includes:</span>
          </h5>
          <p>
            <RiVideoLine className={styles.iconStyle} /> 22 hours on-demand
            video
          </p>
          <p>
            <AiOutlineFile className={styles.iconStyle} /> 14 articles
          </p>
          <p>
            <BiCodeCurly className={styles.iconStyle} /> 19 coding exercises
          </p>
          <p>
            <CgInfinity className={styles.iconStyle} /> Full lifetime access
          </p>
          <p>
            <BiMobileAlt className={styles.iconStyle} /> Access on mobile and TV
          </p>
          <p>
            <GrLanguage className={styles.iconStyle} /> Bangla Language
          </p>
          <p>
            <AiOutlineSafetyCertificate className={styles.iconStyle} /> Certificate of completion
          </p>

        </div>
      </div>
    </>
  );
};

export default CourseHighlight;
