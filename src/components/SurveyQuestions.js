
import React from "react";
import "./SurveyQuestions.css";



function Question({ question, answer, onAnswer }) {
    const handleChange = (event) => {
        onAnswer(question.id, event.target.value);
    };

    return (
        <div className="question">
            <p>{question.text}</p>
            {question.type === 'rating' ? (
                <div className="options">
                    {[...Array(question.scale)].map((_, index) => {
                        const value = index + 1;
                        return (
                            <label key={value}>
                                <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value={value}
                                    checked={answer === value.toString()}
                                    onChange={handleChange}
                                />
                                <span className="custom-radio">{value}</span>
                            </label>
                        );
                    })}
                </div>
            ) : (
                <textarea
                    value={answer || ''}
                    onChange={(e) => onAnswer(question.id, e.target.value)}
                    placeholder="Your feedback"
                />
            )}
        </div>
    );
}

export default Question;
