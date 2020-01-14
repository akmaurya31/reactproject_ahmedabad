import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNewTodo } from './actions/todos.actions'

let TodoInput = ({ handleSubmit, addNewTodo }) => {

  function addTodo({ newTodo }) {
    addNewTodo(newTodo)
  }

  const BtnStyle = {
    color: 'white',
    backgroundColor: 'red',
    marginLeft: 20,
  };


  return (
      
    <React.Fragment>
 
    <hr />
    <form onSubmit={handleSubmit(addTodo)}>
      <Field
        type="text"
        name="newTodo"
        component="input"
      />
      <button type="submit" style={BtnStyle}> Submit</button>
    </form>
    </React.Fragment>
 
  )

}

TodoInput = reduxForm({
  form: 'todo_input'
})(TodoInput)

function mapStateToProps(state) {
  return {
    initialValues: { newTodo: 'hello' }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNewTodo: bindActionCreators(addNewTodo, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);