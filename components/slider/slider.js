import {Card, Image} from 'react-bootstrap';
import React, {useState} from "react";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { FaChalkboardTeacher } from "react-icons/fa";

const SliderComponent = ({ source }) => {
    const cardStyle = { maxWidth: "18.75rem", height: "20rem" };
    const [courses, setCourses] = useState([
        {
            title: "Intro to Programming",
            body: "lorem ipsum...",
            author: "mario",
            difficulty: "Beginner",
            rating: 3,
            src: "/images/1.png",
            id: 1,
        },
        {
            title: "Machine Learning",
            body: "lorem ipsum...",
            author: "yoshi",
            difficulty: "Intermediate",
            src: "/images/2.jpg",
            id: 2,
        },
        {
            title: "Cloud Dev Ops Engineer",
            body: "lorem ipsum...",
            author: "mario",
            difficulty: "Advanced",
            src: "/images/3.jpg",
            id: 3,
        },
        {
            title: "Intro to Programming",
            body: "lorem ipsum...",
            author: "mario",
            difficulty: "Beginner",
            src: "/images/1.png",
            id: 1,
        },
        {
            title: "Machine Learning",
            body: "lorem ipsum...",
            author: "yoshi",
            difficulty: "Intermediate",
            src: "/images/2.jpg",
            id: 2,
        },
        {
            title: "Cloud Dev Ops Engineer",
            body: "lorem ipsum...",
            author: "mario",
            difficulty: "Advanced",
            src: "/images/3.jpg",
            id: 3,
        },
    ]);

    var settings = {
        dots: false,
        autoplay: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        }]
    };
    return (
        <>
            <Slider {...settings}>
                {courses.map((course,key) => (
                    <div style={{ padding : '0 6px'}} key={key}>
                        <Card className="slider-card" style={cardStyle} key={course.id}>
                            <Card.Img  src={course.src}/>
                            <Card.Body>
                                <Card.Title> {course.title} </Card.Title>
                                <Card.Text>
                                    <span className="instructor"><FaChalkboardTeacher style={{ color: '#000000', fontSize: '15px',marginRight : '5px' }}/>{course.author}</span>
                                    <span className="rating" style={{ color: '#000000', fontSize: '15px',marginRight : '5px' }}> <AiFillStar/> <AiFillStar/> <AiFillStar/> <span className="rating-number">(3)</span> </span>
                                    <span className="difficulty"> <GoGraph style={{    color: "#04cbe0"}}/> {course.difficulty}</span>

                                    {/*<p><span style={{ fontWeight: 'bold' }}>Estimated Time: </span>{course.time} </p>*/}
                                </Card.Text>
                            </Card.Body>
                            <div id="overlay4">
                                <h2 className="overlay-title">{course.title}</h2>
                                <p className="fa fa-arrow-circle-right fa-4x img-icon"></p>
                            </div>
                        </Card>
                    </div>
                ))}
            </Slider>
        </>

    );
}

export default SliderComponent;