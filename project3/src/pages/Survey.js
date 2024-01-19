import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Results from './Results';

function Survey() {
    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber, 10);

    if (questionNumberInt === 11) {
        return <Results />;
    }

    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            {questionNumberInt === 1 && <h2>Question 1</h2>}
            {questionNumberInt !== 1 && questionNumberInt !== 11 && (
                <h2>Question {questionNumber}</h2>
            )}

            {questionNumberInt > 1 && (
                <Link to={`/survey/${questionNumberInt - 1}`}>
                    Previous
                </Link>
            )}

            {questionNumberInt < 11 && (
                <Link to={`/survey/${questionNumberInt + 1}`}>
                    Next
                </Link>
            )}
        </div>
    );
}

export default Survey;
