import { Statistic } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { useState } from 'react';
import { GlobalStyles } from './GlobalStyle';
import { AppWraper } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  };

  const handleClickNeutral = () =>{
    setNeutral(neutral + 1);
  }

  const handleClickBad = () =>{
    setBad(bad + 1);
  }

  const total = good + neutral + bad;

  const positiveFeedback = total === 0 ? 0 : Math.round((good / total) * 100);

  return (
    <AppWraper
         style={{
          height: '100vh',
          //  display: 'flex',
           //  alignItems: 'center',
           margin: '100px',
           fontSize: 40,
           color: '#010101',
         }}
       >
         <FeedbackOptions style={{display: 'flex', alignItems: 'center',}}
           handleClickGood={handleClickGood}
           handleClickNeutral={handleClickNeutral}
           handleClickBad={handleClickBad}

         />
           {total > 0 ? (
           <Statistic
            good={good}
             neutral={neutral}
             bad={bad}
            totalFeedback={total}
             positiveFeedback={positiveFeedback}
           />
         ) : (
           <Notification message="There is no feedback" />
        )}
         <GlobalStyles/>
       </AppWraper>
    
  )
};
