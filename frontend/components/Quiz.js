import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchQuiz} from '../state/action-creators';

const mapStateToProps = state => {
  console.log("In the map with ", state);
  return {
    quiz_id: state.quiz.quiz_id,
    question: state.quiz.question,
    answers: state.quiz.answers}

  
}

function Quiz(props) {

  useEffect(() => {
    props.fetchQuiz();
  }, []);

  return (
    <div id="wrapper">
      {props.quiz_id
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
         ? (
          <>
            <h2>{props.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {props.answers[0].text}
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                {props.answers[1].text}
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={console.log(props)}>Submit answer</button>
          </>
        ) : `Loading next quiz ${props.quiz_id}`
      }
    </div>
  )
}

export default connect(mapStateToProps, {fetchQuiz})(Quiz);