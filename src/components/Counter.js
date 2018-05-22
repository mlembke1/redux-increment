import React from 'react'
import { connect } from 'react-redux'


const Counter = (props) => {
  return (
    <div>
      <h1>Counter</h1>
      <p> Count: {props.count}</p>
      <button onClick={props.onIncrementClick}>increment</button>
    <button onClick={props.onDecrementClick}>decrement</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementClick: () => {
      const action ={ type: 'INCREMENT' }
      dispatch(action)
    },
    onDecrementClick: () => {
      const action = { type: 'DECREMENT' }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
