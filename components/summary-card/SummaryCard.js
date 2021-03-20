import { Card, CardDeck } from "react-bootstrap";
import { useState } from "react";
import styles from "./SummaryCard.module.css";

import { BsBagFill } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";

const SummaryCard = () => {
  const [summary, setSummary] = useState([
    {
      title: "বাস্তব কর্মসংস্থান দক্ষতা",
      body:
        "আমাদের মান সম্মত পাঠ্যক্রমটি ইন্ডাস্ট্রির চাহিদার সাথে মিল রেখে তৈরি করা হয়েছে,  তাই শীর্ষ সংস্থাগুলি আপনার কাছে  যে  দক্ষতাগুলি চায় তা শিখে নিন ",
      src: <BsBagFill style={{ color: "#02b3e4", fontSize: "40px" }} />,
      color: "3px solid #02b3e4",
      shadow: "2px 5px #02b3e4",
      id: 1,
    },
    {
      title: "প্রোজেক্ট ভিত্তিক, সক্রিয় শেখা",
      body:
        "রিয়েল-ওয়ার্ল্ড প্রকল্পগুলি এবং অন্যান্য হ্যান্ড-অন অনুশীলনগুলি দিয়ে শিখুন যা সত্যিকারের দক্ষতা অর্জনে সহায়তা করে",
      src: <FaRegLightbulb style={{ color: "#ffae0c", fontSize: "40px" }} />,
      color: "3px solid #ffae0c",
      shadow: "2px 5px #ffae0c",
      id: 2,
    },
    {
      title: "আপনার সময়সূচী অনুযায়ী শিখুন",
      body:
        "সেলফ বেসড লার্নিং - যখনই এবং যেখানেই আপনি চান, কোর্সের রিসোর্স ব্যবহার করুন",
      src: (
        <AiOutlineClockCircle style={{ color: "#15c26b", fontSize: "40px" }} />
      ),
      color: "3px solid #15c26b",
      shadow: "2px 5px #15c26b",
      id: 3,
    },
  ]);

  return (
    <>
      <div className="container">
        <CardDeck style={{ textAlign: "center" }}>
          {summary.map((card) => (
            <Card
              className={styles.cardStyle}
              style={{
                borderTop: `${card.color}`,
                boxShadow: `${card.shadow}`,
              }}
              key={card.id}
            >
              <div className="text-center" style={{ marginTop: "25px" }}>
                {card.src}
              </div>
              <Card.Body>
                <Card.Title> {card.title} </Card.Title>
                <Card.Text>
                  {card.body}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </div>
    </>
  );
};

export default SummaryCard;
