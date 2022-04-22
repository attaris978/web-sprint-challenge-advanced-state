import React from 'react'
import { connect } from 'react-redux'
import { inputChange } from '../state/action-creators'

export function Form(props) {


  const onSubmit = evt => {

  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input value={props.newQuestion} maxLength={50}
       onChange={ e => props.inputChange({...props, newQuestion: e.target.value}) } id="newQuestion" placeholder="Enter question" />
      <input value={props.newTrueAnswer} maxLength={50}
       onChange={ e => props.inputChange({...props, newTrueAnswer: e.target.value}) } id="newTrueAnswer" placeholder="Enter true answer" />
      <input value={props.newFalseAnswer} maxLength={50}
       onChange={ e => props.inputChange({...props, newFalseAnswer: e.target.value}) } id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => { 
  console.log(state);
  return {
  newQuestion: state.form.newQuestion,
  newTrueAnswer: state.form.newTrueAnswer,
  newFalseAnswer: state.form.newFalseAnswer
}
}
export default connect(mapStateToProps, {inputChange})(Form)
