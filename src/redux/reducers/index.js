
import { combineReducers } from 'redux';
import { ProduceReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: ProduceReducer,
  product: selectedProductReducer,
});

export default reducers;