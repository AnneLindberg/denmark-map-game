// FeedbackComponent.tsx
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CityState } from '../store/cityTypes';

const FeedbackComponent: React.FC = () => {
    const lastGuessCorrect = useSelector((state: CityState) => state.lastGuessCorrect);
  
    const feedbackClass = lastGuessCorrect
      ? "feedback-box feedback-correct"
      : "feedback-box feedback-incorrect";
  
    return (
      <div className={feedbackClass}>
        {lastGuessCorrect !== null && (
          <div>
            {lastGuessCorrect
              ? 'Correct! You found the city.'
              : 'Try again! That’s not the right location.'}
          </div>
        )}
      </div>
    );
  };
  
  export default FeedbackComponent;
