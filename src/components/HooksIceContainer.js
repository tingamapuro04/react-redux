import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import buyice from '../redux/IceCream/Iceaction';

function HooksIceContainer() {
  const numsOfIce = useSelector(state => state.buyIce.numsOfIce);
  const dispatch = useDispatch()
  return (
    <div>
      <h3>We have  {numsOfIce} cakes</h3>
      <button onClick={() => dispatch(buyice())}>BUY</button>
    </div>
  )
}

export default HooksIceContainer
