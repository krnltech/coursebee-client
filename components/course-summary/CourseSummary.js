import { useState } from "react";

import { GiCheckMark } from "react-icons/gi";
import styles from "./CourseSummary.module.css";

const CourseSummary = () => {
  const [courseInfo, setCourseInfo] = useState([
    {
      info:
        "Learn to use Python professionally, learning both Python 2 and Python 3!",
      id: 1,
    },
    {
      info:
        "Learn advanced Python features, like the collections module and how to work with timestamps!",
      id: 2,
    },
    {
      info: "Understand complex topics, like decorators.",
      id: 3,
    },
    {
      info:
        "Get an understanding of how to create GUIs in the Jupyter Notebook system!",
      id: 4,
    },
    {
      info: "Create games with Python, like Tic Tac Toe and Blackjack!",
      id: 5,
    },
    {
      info: "Learn to use Object Oriented Programming with classes!",
      id: 6,
    },
    {
      info:
        "Understand how to use both the Jupyter Notebook and create .py files.",
      id: 7,
    },
    {
      info: "Build a complete understanding of Python from the ground up!",
      id: 8,
    },
  ]);

  return (
    <>
      <div className={styles.summary}>
        <h2 style={{ marginBottom: "20px" }}>কী কী শিখবেন এই কোর্স থেকে?</h2>
        {courseInfo.map((summary) => (
          <div key={summary.id}>
            <h5>
              <GiCheckMark /> {summary.info}
            </h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseSummary;

