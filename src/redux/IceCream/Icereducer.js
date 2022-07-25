import BUY_ICE from "./Icetype"

const initialState = {
  numsOfIce: 50
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case BUY_ICE: return {
      ...state,
      numsOfIce: state.numsOfIce-1
    }
    default: return state
  }
}

export default reducer