import React from 'react'
import {connect} from 'react-redux'
import {incCounter, decCounter, resetCounter} from '../redux/actions/counter-actions'
import './Counter.scss'

const Counter = ({count, incCounter, decCounter, resetCounter, title}) => {

    return (
      <div className="counter">
        <h1>{title}</h1>
        <div className="wrapper counter">
          <button onClick={decCounter}>-</button>
          <div className="counter display">
            <p>{count}</p>
            <button onClick={resetCounter}>Reset</button>
          </div>
          <button onClick={incCounter}>+</button>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  const {count} = state.counter
    return {
        count: count
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incCounter: () => dispatch(incCounter()),
    decCounter: () => dispatch(decCounter()),
    resetCounter: () => dispatch(resetCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
