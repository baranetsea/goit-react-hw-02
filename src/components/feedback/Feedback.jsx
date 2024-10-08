import React, { useEffect } from "react";
import styles from "./Feedback.module.css";

const Feedback = ({ feedback, totalF, positiveF }) => {
  // const totalF = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div>
      <ul className={styles.list}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {totalF}</li>
        <li>Positive: {positiveF} %</li>
      </ul>
    </div>
  );
};

export default Feedback;
