import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";
import Notification from "./components/notification/Notification";
import { useEffect } from "react";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const value = localStorage.getItem("Fvalue");
    const parsedValue = JSON.parse(value) ?? {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    return parsedValue;
  });

  useEffect(() => {
    const strValue = JSON.stringify(feedback);
    localStorage.setItem("Fvalue", strValue);
  }, [feedback]);

  const reset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  const totalFeedbck = feedback.good + feedback.neutral + feedback.bad;

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });

    // if (feedbackType === "good") {
    //   setFeedback({ ...feedback, good: feedback.good + 1 });
    // }
    // if (feedbackType === "neutral") {
    //   setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
    // }
    // if (feedbackType === "bad") {
    //   setFeedback({ ...feedback, bad: feedback.bad + 1 });
    // }
  };

  // const onSetGoodFeedback = () => {
  //   setFeedback({ ...feedback, good: feedback.good + 1 });
  // };
  // const onSetNeutralFeedback = () => {
  //   setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
  // };

  // const onSetBadFeedback = () => {
  //   setFeedback({ ...feedback, bad: feedback.bad + 1 });
  // };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedbck} reset={reset} />
      {totalFeedbck > 0 ? <Feedback feedback={feedback} /> : <Notification />}
    </>
  );
}

export default App;
