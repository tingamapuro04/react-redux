import { BUY_CAKE, BUY_ICE, LEAVE_CAKE } from "./Caketype"

const initialState = {
  numOfCakes: 15,
  numOfIce: 35
}

const CakeReducer = (state=initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    case LEAVE_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes + 1
    }
    case BUY_ICE: return {
      ...state,
      numOfIce: state.numOfIce -1
    }
    default: return state
  }
}

export default CakeReducer
