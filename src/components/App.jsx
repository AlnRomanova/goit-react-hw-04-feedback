import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // handleClickBtn = (key) =>  {
  //   this.setState((prevState) => ({[key]: prevState[key] + 1 }));
  // };

  // countTotalFeedback() {
  //   return this.state.good + this.state.neutral + this.state.bad;
  // }

  const total = good + neutral + bad;
  const positivePercentage =  Math.round((good / total) * 100) + '%';

  function handleClickBtn (key)  {

    switch (key) {
    case 'good':
    setGood(good+1);
    break;


    case 'neutral':
      setNeutral(neutral+1);
      break;


      case 'bad':
        setBad(bad+1);
        break;

        default:
          break;
  }
}
  // countPositiveFeedbackPercentage() {
  //   const total = this.countTotalFeedback();

  //   if (this.state.good > 0) {
  //     return Math.round((this.state.good / total) * 100) + '%';
  //   }
  // }


    // const { good, neutral, bad } = this.state;
    // const total = this.countTotalFeedback();
    // const percentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ good, neutral, bad }}
            onLeaveFeedback={handleClickBtn}
          />
          {total === 0
           ? (<Notification message="There is no feedback" />)
           : (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />)
          }

        </Section>
      </>
    );
}
