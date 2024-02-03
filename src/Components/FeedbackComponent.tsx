// FeedbackComponent.tsx
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CityState } from '../store/cityTypes';

const FeedbackComponent: React.FC = () => {
  const lastGuessCorrect = useSelector((state: CityState) => state.lastGuessCorrect);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    // If the last guess was correct, reset the attempt count.
    if (lastGuessCorrect) {
      setAttempts(0);
    }
  }, [lastGuessCorrect]);

   // Call this function whenever the user makes a guess
   const incrementAttempts = () => {
    setAttempts((prev) => prev + 1);
  };

  return (
    <div className="feedback-box" >
      {lastGuessCorrect !== null && (
        <div >
          {lastGuessCorrect ? 'Correct! You found the city.' : 'Try again! That’s not the right location.'}
          {/* <p>Attempts: {attempts}</p> */}

        </div>
      )}
    </div>
  );
};

export default FeedbackComponent;
