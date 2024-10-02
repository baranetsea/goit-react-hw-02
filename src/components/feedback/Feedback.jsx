import React, { useEffect } from "react";
import styles from "./Feedback.module.css";

const Feedback = ({ feedback }) => {
  const totalF = feedback.good + feedback.neutral + feedback.bad;
  return (
    <div>
      <ul className={styles.list}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {totalF}</li>
        <li>Positive: {Math.round((feedback.good / totalF) * 100)} %</li>
      </ul>
    </div>
  );
};

export default Feedback;
