import {Card, Image} from 'react-bootstrap';
import React, {useState} from "react";
import Slider from "react-slick";
import { GiTeacher } from "react-icons/gi";

const SliderComponent = ({ source }) => {
    const cardStyle = { maxWidth: "18.75rem", height: "20rem" };
    const [courses, setCourses] = useState([
        {
            title: "Intro to Programming",
            instructor: "zahid Hossain",
            body: "lorem ipsum...",
            author: "mario",
            difficulty: "Beginner",
            src: "/images/1.png",
            id: 1,
        },
        {
            title: "Machine Learning",
            instructor: "zahid Hossain",
            body: "lorem ipsum...",
            author: "yoshi",
            difficulty: "Intermediate",
            src: "/images/2.jpg",
            id: 2,
        },
        {
            title: "Cloud Dev Ops Engineer",
            instructor: "zahid Hossain",
            body: "lorem ipsum...",
            author: "mario",
            difficulty: "Advanced",
            src: "/images/3.jpg",
            id: 3,
        },
        {
            title: "Intro to Programming",
            instructor: "zahid Hossain",
            body: "lorem ipsum...",
            author: "mario",
            difficulty: "Beginner",
            src: "/images/1.png",
            id: 1,
        },
        {
            title: "Machine Learning",
            instructor: "zahid Hossain",
            body: "lorem ipsum...",
            author: "yoshi",
            difficulty: "Intermediate",
            src: "/images/2.jpg",
            id: 2,
        },
        {
            title: "Cloud Dev Ops Engineer",
            instructor: "zahid Hossain",
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
                            <Card.Img  src={course.src} style={{ height: "150px"}} />
                            <Card.Body>
                                <Card.Title> {course.title} </Card.Title>
                                <Card.Text>
                                    <p><GiTeacher style={{ color: '#000000', fontSize: '15px',marginRight : '5px' }}/>{course.instructor}</p>
                                    <p>{course.difficulty}</p>

                                    {/*<p><span style={{ fontWeight: 'bold' }}>Estimated Time: </span>{course.time} </p>*/}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Slider>
        </>

    );
}

export default SliderComponent;