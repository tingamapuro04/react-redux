import { BUY_CAKE } from "./Caketype"

const initialState = {
  numOfCakes: 15
}

const CakeReducer = (state=initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

export default CakeReducer
