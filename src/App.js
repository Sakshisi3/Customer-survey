import React, { useState } from 'react';
import WelcomeScreen from './components/Welcomescreen';
import Survey from './components/SurveyPage';
import ThankYouScreen from './components/ThankyouPage';
import './App.css';

function App() {
    const [isSurveyStarted, setIsSurveyStarted] = useState(false);
    const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);

    const startSurvey = () => {
        setIsSurveyStarted(true);
        setIsSurveyCompleted(false);
    };

    const completeSurvey = () => {
        setIsSurveyStarted(false);
        setIsSurveyCompleted(true);
    };

    return (
        <div>
            {!isSurveyStarted && !isSurveyCompleted && <WelcomeScreen onStart={startSurvey} />}
            {isSurveyStarted && <Survey onComplete={completeSurvey} />}
            {isSurveyCompleted && <ThankYouScreen onReset={startSurvey} />}
        </div>
    );
}

export default App;
