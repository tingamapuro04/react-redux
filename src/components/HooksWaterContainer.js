import React from 'react';
import buywater from '../redux/water/waterAction';
import { useSelector, useDispatch } from 'react-redux';

function HooksWaterContainer() {
  const numOfBottles = useSelector(state => state.buywater.numOfBottles)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>I have {numOfBottles} </h3>
      <button onClick={() => dispatch (buywater()) }>Sell</button>
    </div>
  )
}

export default HooksWaterContainer
