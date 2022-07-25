import { combineReducers } from "redux";
import CakeReducer  from './cakes/CakeReducer';
import reducer from "./IceCream/Icereducer";
import WaterReducer from "./water/WaterReducer";

const rootReducer = combineReducers({
  buyCake: CakeReducer,
  buyIce: reducer,
  buywater: WaterReducer
})

export default rootReducer