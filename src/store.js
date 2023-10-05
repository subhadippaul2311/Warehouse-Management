import { createStore } from 'redux';
import warehouseReducer from './reducers/warehouseReducer';

const store = createStore(warehouseReducer);

export default store;
