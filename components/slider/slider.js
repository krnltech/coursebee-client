import { Card } from "react-bootstrap";
import { useState } from "react";
import Slider from "react-slick";

import { AiFillStar } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { FaChalkboardTeacher, FaGlobeAmericas } from "react-icons/fa";
import { ImBooks } from "react-icons/im";

const SliderComponent = ({ source }) => {
  const cardStyle = { height: "25rem" };
  const [courses, setCourses] = useState([
    {
      title: "Intro to Programming",
      body: "lorem ipsum...",
      author: "mario",
      difficulty: "Beginner",
      rating: 3,
      src: "/images/1.png",
      id: 1,
      price: 3000,
      lectures: 21,
    },
    {
      title: "Machine Learning",
      body: "lorem ipsum...",
      author: "yoshi",
      difficulty: "Intermediate",
      rating: 4,
      src: "/images/2.jpg",
      id: 2,
      price: 3000,
      lectures: 21,
    },
    {
      title: "Cloud Dev Ops Engineer",
      body: "lorem ipsum...",
      author: "mario",
      difficulty: "Advanced",
      rating: 5,
      src: "/images/3.jpg",
      id: 2,
      price: 3000,
      lectures: 21,
    },
    {
      title: "Intro to Programming",
      body: "lorem ipsum...",
      author: "mario",
      difficulty: "Beginner",
      rating: 3,
      src: "/images/1.png",
      id: 1,
      price: 3000,
      lectures: 21,
    },
    {
      title: "Machine Learning",
      body: "lorem ipsum...",
      author: "yoshi",
      difficulty: "Intermediate",
      rating: 4,
      src: "/images/2.jpg",
      id: 2,
      price: 3000,
      lectures: 21,
    },
    {
      title: "Cloud Dev Ops Engineer",
      body: "lorem ipsum...",
      author: "mario",
      difficulty: "Advanced",
      rating: 3,
      src: "/images/3.jpg",
      id: 3,
      price: 3000,
      lectures: 21,
    },
  ]);

  const renderRating = (ratingNumber) => {
    const stars = [];
    for (var i = 0; i < ratingNumber; i++) {
      stars.push(<AiFillStar className="ratingIcon" />);
    }
    return stars.map((star, key) => {
      return <>{star}</>;
    });
  };

  var settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {courses.map((course, key) => (
          <div style={{ padding: "0 6px" }} key={key}>
            <Card className="slider-card" style={cardStyle} key={course.id}>
              <div className="card-image">
                <Card.Img src={course.src} />
                <div id="overlay">
                  <div className="overlay-content">
                    <span className="lectures">
                      {" "}
                      <ImBooks className="mr-2" />{" "}
                      <span> {course.lectures} </span>
                    </span>
                    <span className="rating mt-2">
                      {" "}
                      {renderRating(course.rating)}{" "}
                      <span className="rating-number">({course.rating})</span>{" "}
                    </span>
                    <span className="language mt-2">
                      {" "}
                      <FaGlobeAmericas className="mr-2" /> <span>বাংলা </span>{" "}
                    </span>
                  </div>
                </div>
              </div>
              <Card.Body>
                <span className="difficulty">
                  {" "}
                  <GoGraph style={{ color: "#04cbe0" }} /> {course.difficulty}
                </span>
                <Card.Title> {course.title} </Card.Title>
                <Card.Text>
                  <span className="instructor">
                    <FaChalkboardTeacher
                      style={{
                        color: "#000000",
                        fontSize: "15px",
                        marginRight: "5px",
                      }}
                    />
                    {course.author}
                  </span>
                  <h5 className="mt-2 mb-3"> {course.price} TK.</h5>
                  <a href="#" className="cart-button mt-2 ">
                    Add to Cart
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SliderComponent;
