import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import buyCake  from '../redux/cakes/CakeAction';

function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.buyCake.numOfCakes);
  const dispatch = useDispatch()
  return (
    <div>
      <h3>We have  {numOfCakes} cakes</h3>
      <button onClick={() => dispatch(buyCake())}>BUY</button>
    </div>
  )
}

export default HooksCakeContainer
