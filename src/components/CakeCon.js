import React from 'react';
import { connect } from 'react-redux';
import buyCake from '../redux/cakes/CakeAction';

function CakeCon({numOfCakes, buyCake}) {
  return (
    <div>
      <h2>Number of cakes {numOfCakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
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
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeCon)
