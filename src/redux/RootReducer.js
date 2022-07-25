import { combineReducers } from "redux";
import CakeReducer  from './cakes/CakeReducer';
import reducer from "./IceCream/Icereducer";

const rootReducer = combineReducers({
  buyCake: CakeReducer,
  buyIce: reducer
})

export default rootReducer