import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

const Counter = props => (
  <div>
    <h1>Pointless Counter</h1>

    <p>A pointless button that does nothing but increment by +1.</p>

    <p>Current count: <strong>{props.count}</strong></p>

    <button className="btn btn-primary" onClick={props.increment}>DO NOT PUSH</button>
  </div>
);

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Counter);
