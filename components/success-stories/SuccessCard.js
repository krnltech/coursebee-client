import { Card, CardDeck } from "react-bootstrap";
import { useState } from "react";
import styles from "./successcard.module.css";
const SuccessCard = () => {
  const cardStyle = { 
    width: "20.75rem", 
    height: "25rem", 
    borderRadius: "15px", 
    borderTop: "3px solid red",
  };

  const [success, setSuccess] = useState([
    {
      name: "Zahid Hossain",
      body: "Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high-impact skills that top companies want.",
      profession: "",
      id: 1,
    },
    {
      name: "Muhaimin Rahman",
      body: "Learn by doing with real-world projects and other hands-on exercises that lead to real skills mastery.",
      profession: "",
      id: 2,
    },
    {
      name: "Habib Khan",
      body: "Self-paced learning - whenever and wherever you want. Graduate while learning part-time for 10 hrs/week.",
      profession: "",
      id: 3,
    }
  ]);

  return (  
    <>
      <div className="container">
        <CardDeck style={{ textAlign: 'center' }}>
          {success.map((s) => (
            <Card style={cardStyle} key={s.id} className="shadow bg-white">                         
              <Card.Body>
                <div className={styles.successcardimage}> </div>
                <Card.Title className="mt-4"> {s.name} </Card.Title>
                <Card.Text>
                  <p>{s.body}</p>                                
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          ))}
        </CardDeck>      
      </div>
    </>
  );
}
 
export default SuccessCard;