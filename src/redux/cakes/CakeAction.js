import * as actions from './Caketype'

const buyCake = () => {
  return {
    type: actions.BUY_CAKE
  }
}

const leaveCake = () => {
  return {
    type: actions.LEAVE_CAKE
  }
}

export { buyCake, leaveCake }