import { Card, CardDeck } from "react-bootstrap";
import { useState } from "react";
import { BsBagFill } from 'react-icons/bs';
import { FaRegLightbulb } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { AiOutlineUserSwitch } from 'react-icons/ai';

const SummaryCard = () => {
  const cardStyle = { 
    width: "20.75rem", 
    height: "20rem", 
    borderRadius: "25px", 
    borderTop: "3px solid red",
    boxShadow: "5px 10px #888888"
  };

  const [summary, setSummary] = useState([
    {
      title: "Get real employable skills",
      body: "Our quality curriculum is designed with top-tier industry partners, not academics, so you    learn the high-impact skills that top companies want.",
      src: <BsBagFill style={{ color: '#02b3e4', fontSize: '40px' }}/>,
      id: 1,
    },
    {
      title: "Project-based, active learning",
      body: "Learn by doing with real-world projects and other hands-on exercises that lead to real skills mastery.",
      src: <FaRegLightbulb style={{ color: '#ffae0c', fontSize: '40px' }}/>,
      id: 2,
    },
    {
      title: "Learn on your schedule",
      body: "Self-paced learning - whenever and wherever you want. Graduate while learning part-time for 10 hrs/week.",
      src: <AiOutlineClockCircle style={{ color: '#15c26b', fontSize: '40px' }}/>,
      id: 3,
    },
    // {
    //   title: "The help you need, when you need it",
    //   body: "Reach out to our mentors 24/7 and have your coding questions answered quickly so you can keep learning.",
    //   src: <AiOutlineUserSwitch style={{ color: '#a951ed', fontSize: '40px' }}/>,
    //   id: 4,
    // }
  ]);

  return (  
    <>
      <div className="container">
        <CardDeck style={{ textAlign: 'center' }}>
          {summary.map((s) => (
            <Card style={cardStyle} key={s.id}>
              <div className="text-center" style={{ marginTop: '25px' }}>                
                {s.src}
              </div>                          
              <Card.Body>
                <Card.Title> {s.title} </Card.Title>
                <Card.Text>
                  <p>{s.body}</p>                                
                </Card.Text>
              </Card.Body>
            </Card>
          ))};
        </CardDeck>      
      </div>
    </>
  );
}

export default SummaryCard;