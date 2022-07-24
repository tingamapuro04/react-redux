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

const buyice = () => {
  return {
    type: actions.BUY_ICE
  }
}

export { buyCake, leaveCake, buyice }