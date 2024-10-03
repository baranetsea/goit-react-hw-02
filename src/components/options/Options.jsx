import React from "react";
import styles from "./Options.module.css";

const Options = ({ updateFeedback, totalF, reset }) => {
  return (
    <div className={styles.container}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalF > 0 && <button onClick={reset}>Reset</button>}
    </div>
  );
};

export default Options;
