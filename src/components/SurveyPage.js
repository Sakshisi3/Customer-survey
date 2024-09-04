
import React, { useState } from 'react';
import Question from './SurveyQuestions';
import ConfirmationDialog from './Confirmation';
import './SurveyPage.css';


function Survey({ onComplete }) {
    const questions = [
        { id: 1, text: '1.  How satisfied are you with our products?', type: 'rating', scale: 5 },
        { id: 2, text: '2.  How fair are the prices compared to similar retailers?', type: 'rating', scale: 5 },
        { id: 3, text: '3.  How satisfied are you with the value for money of your purchase?', type: 'rating', scale: 5 },
        { id: 4, text: '4.  On a scale of 1-10 how would you recommend us to your friends and family?', type: 'rating', scale: 10 },
        { id: 5, text: '5.  What could we do to improve our service?', type: 'text' }
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

    const handleAnswer = (questionId, answer) => {
        setAnswers({ ...answers, [questionId]: answer });
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowConfirmationDialog(true);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleSubmit = () => {
        // Logic to save answers to localStorage or backend
        // set flag as 'COMPLETED'
        onComplete();
    };

    const handleCancelSubmit = () => {
        setShowConfirmationDialog(false);
    };

    return (
        <div className="survey-container">
             <h1>Customer Survey</h1>
            <div>
               
                <div className="question-number">
                     {currentQuestionIndex + 1}/{questions.length}
                </div>
                <Question
                    question={questions[currentQuestionIndex]}
                    answer={answers[questions[currentQuestionIndex].id]}
                    onAnswer={handleAnswer}
                />
            </div>

            <div className="survey-navigation">
                <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                    Previous
                </button>
                <button onClick={handleNext}>
                    {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
                </button>
            </div>

            {showConfirmationDialog && (
                <ConfirmationDialog
                    onConfirm={handleSubmit}
                    onCancel={handleCancelSubmit}
                />
            )}
        </div>
    );
}

export default Survey;
