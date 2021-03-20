import classNames from "classnames";
import styles from "./CourseBanner.module.css";

import { AiFillStar, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { Button } from "react-bootstrap";


const CourseBanner = ({ title, secondTitle, rating, numberOfRatings, numberOfStudents, instructorName }) => {

  // Course Rating 
  const renderRating = (ratingNumber) => {
    const stars = [];
    for (var i = 0; i < ratingNumber; i++) {
      stars.push(<AiFillStar className={styles.ratingIcon} />);
    }
    return stars.map((star, key) => {
      return <>{star}</>;
    });
  };

  return (
    <>
      <div className={classNames("container-fluid", styles.courseBanner)}>
        <h2>{title}</h2>
        <h4>{secondTitle}</h4>
        <span className={classNames(styles.rating, "mt-2")}>

          {renderRating(rating)}
          <span className={styles.ratingNumber}>({numberOfRatings} ratings)  {numberOfStudents} students</span>
        </span>
        Created by <a href="#">{instructorName}</a>
        <br />
        <br />
        <Button variant="outline-success" style={{ marginRight:"10px" }}><AiOutlineHeart/> WishList</Button>
        <Button variant="outline-warning"><AiOutlineShareAlt/> Share</Button>
      </div>
    </>
  );
};

export default CourseBanner;
