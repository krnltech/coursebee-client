import { Card, CardDeck } from "react-bootstrap";
import { useState } from "react";
import styles from "./SummaryCard.module.css";

import { BsBagFill } from 'react-icons/bs';
import { FaRegLightbulb } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';

const SummaryCard = () => {

  const [summary, setSummary] = useState([
    {
      title: "Get real employable skills",
      body: "Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high-impact skills that top companies want.",
      src: <BsBagFill style={{ color: '#02b3e4', fontSize: '40px' }}/>,
      color: "3px solid #02b3e4",
      shadow: "2px 5px #02b3e4",
      id: 1,
    },
    {
      title: "Project-based, active learning",
      body: "Learn by doing with real-world projects and other hands-on exercises that lead to real skills mastery.",
      src: <FaRegLightbulb style={{ color: '#ffae0c', fontSize: '40px' }}/>,
      color: "3px solid #ffae0c",
      shadow: "2px 5px #ffae0c",
      id: 2,
    },
    {
      title: "Learn on your schedule",
      body: "Self-paced learning - whenever and wherever you want. Graduate while learning part-time for 10 hrs/week.",
      src: <AiOutlineClockCircle style={{ color: '#15c26b', fontSize: '40px' }}/>,
      color: "3px solid #15c26b",
      shadow: "2px 5px #15c26b",
      id: 3,
    }
  ]);

  return (
    <>
      <div className="container">
        <CardDeck style={{ textAlign: 'center' }}>
          {summary.map((card) => (
            <Card className={styles.cardStyle} style={{borderTop: `${card.color}`, boxShadow: `${card.shadow}`}} key={card.id}>
              <div className="text-center" style={{ marginTop: '25px' }}>                
                {card.src}
              </div>                          
              <Card.Body>
                <Card.Title> {card.title} </Card.Title>
                <Card.Text>
                  <p>{card.body}</p>                                
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>      
      </div>
    </>
  );
}

export default SummaryCard;