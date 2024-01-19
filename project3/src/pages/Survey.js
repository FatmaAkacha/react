import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Results from './Results'; 

function Survey() {
    const { questionNumber } = useParams();
    const navigate = useNavigate();

    const questionNumberInt = parseInt(questionNumber, 10);

    const goToPreviousQuestion = () => {
        const previousQuestionNumber = questionNumberInt - 1;
        if (previousQuestionNumber >= 1) {
            navigate(`/survey/${previousQuestionNumber}`);
        }
    };

    const goToNextQuestion = () => {
        const nextQuestionNumber = questionNumberInt + 1;
        if (nextQuestionNumber <= 10) {
            navigate(`/survey/${nextQuestionNumber}`);
        } else {
            navigate('/results');
        }
    };

    if (questionNumberInt === 10) {
        return <Results />;
    }

    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            {questionNumberInt === 1 && <h2>Question 1</h2>}
            {questionNumberInt !== 1 && questionNumberInt !== 10 && (
                <h2>Question {questionNumber}</h2>
            )}

            <button onClick={goToPreviousQuestion} disabled={questionNumberInt === 1}>
                Previous
            </button>
            <button onClick={goToNextQuestion} disabled={questionNumberInt === 10}>
                Next
            </button>
        </div>
    );
}

export default Survey;
