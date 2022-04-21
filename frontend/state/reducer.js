// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import * as actions from './action-types';

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case actions.MOVE_CLOCKWISE:
      return state === 5 ? 0 :  state + 1;
  
    case actions.MOVE_COUNTERCLOCKWISE:
      return state === 0 ? 5 :  state - 1;
    

  default:
  return state
}
}

const initialQuizState = {
  quiz_id: '',
  question: '',
  answers: ''
}
function quiz(state = initialQuizState, action) {
  switch(action.type) {
case actions.SET_QUIZ_INTO_STATE:
  console.log(action.payload);
    return { 
      quiz_id: action.payload.quiz_id,
      question: action.payload.question,
      answers: action.payload.answers
      
    }
;
  default:
  return state
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return {
    ...state,
    message: action.payload
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type) {
case actions.RESET_FORM:
  return {
    newQuestion: '',
    newTrueAnswer: '',
    newFalseAnswer: ''
  };
  default:
  return state;
  }

}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
