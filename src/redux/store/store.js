import { createStore } from "redux";
import addresses from '../reducers/reducers'

const store = createStore(addresses);

import {
  SET_VISIBILITY_FILTER,
  RECEIVE_ADDRESSES,
  VisibilityFilters
} from '../actions/actions'


export default store;
