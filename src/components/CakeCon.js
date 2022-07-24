import React from 'react';
import { connect } from 'react-redux';
import { leaveCake, buyCake } from '../redux/cakes/CakeAction';

function CakeCon({numOfCakes, buyCake, leaveCake}) {
  return (
    <div>
      <h2>Number of cakes {numOfCakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
      <br />
      <button onClick={leaveCake}>Leave Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    leaveCake: () => dispatch(leaveCake()),
    buyCake: () => dispatch(buyCake())
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeCon)
