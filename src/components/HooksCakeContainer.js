import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake, buyice } from '../redux/cakes/CakeAction';

function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.numOfCakes);
  const numOfIce = useSelector(state => state.numOfIce)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>We have  {numOfCakes} cakes and {numOfIce} ice creams</h3>
      <button onClick={() => dispatch(buyCake())}>BUY</button>
      <button onClick={() => dispatch(buyice())}>LEave</button>
    </div>
  )
}

export default HooksCakeContainer
