import { Card, CardDeck } from "react-bootstrap";
import { useState } from "react";

const CardComps = () => {
  const cardStyle = { maxWidth: "18.75rem", height: "20rem" };
  const cardImage = { height: "140px" };

  const [courses, setCourses] = useState([
    {
      title: "Intro to Programming",
      body: "lorem ipsum...",
      author: "mario",
      difficulty: "Beginner",
      time: "4 months",
      src: "/images/1.png",
      id: 1,
    },
    {
      title: "Machine Learning",
      body: "lorem ipsum...",
      author: "yoshi",
      difficulty: "Intermediate",
      time: "6 months",
      src: "/images/2.jpg",
      id: 2,
    },
    {
      title: "Cloud Dev Ops Engineer",
      body: "lorem ipsum...",
      author: "mario",
      difficulty: "Advanced",
      time: "3 months",
      src: "/images/3.jpg",
      id: 3,
    },
  ]);

  return (
    <>
      <CardDeck>
        {courses.map((course) => (
          <Card style={cardStyle} key={course.id}>
            <Card.Img variant="top" src={course.src} style={cardImage} />
            <Card.Body>
              <Card.Title> {course.title} </Card.Title>
              <Card.Text>
                <p>{course.difficulty}</p>
                <p><span style={{ fontWeight: 'bold' }}>Estimated Time: </span>{course.time} </p>               
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </>
  );
};

export default CardComps;
