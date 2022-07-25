import BUY_WATER from "./waterType"


const initialState = {
  numOfBottles: 29
}

const WaterReducer = (state=initialState, action) => {
  switch(action.type) {
    case BUY_WATER: return {
      ...state,
      numOfBottles: state.numOfBottles - 1
    }
    default: return state
  }
}

export default WaterReducer
