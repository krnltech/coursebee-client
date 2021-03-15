import { Card, CardDeck,Button } from "react-bootstrap";
import { useState } from "react";
import styles from "./successcard.module.css";

const SuccessCard = () => {
  const cardStyle = {  
    borderRadius: "8px", 
    borderTop: "3px solid red",
  };

  const [success, setSuccess] = useState([
    {
      name: "Zahid Hossain",
      body: "The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal.",
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
                <Card.Title className="mt-4 text-muted" style={{fontSize:"1.8em"}}> {s.name} </Card.Title>
                <Card.Text>
                  <p className="text-muted" style={{fontStyle:"italic",fontSize:"1.2em"}}>{s.body}</p>                                
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center flex-column">
                <text className="text-muted">NOW AT</text>
                <text className="text-muted">Raytheon | Data Scientist</text>
              </Card.Footer>
            </Card>
          ))}
        </CardDeck>   
        <div className={styles.successcardbutton}> 
          <Button variant="primary" className="mt-4">MORE SUCCESS STORIES</Button>    
        </div> 
      </div>
    </>
  );
}
 
export default SuccessCard;