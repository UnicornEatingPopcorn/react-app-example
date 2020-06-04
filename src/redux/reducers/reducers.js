
import {
  REQUEST_ADDRESSES,
  RECEIVE_ADDRESSES
} from '../actions/actions'

function addresses(
  state = {
    isFetching: false,
    addresses: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_ADDRESSES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_ADDRESSES:
      return Object.assign({}, state, {
        isFetching: false,
        addresses: action.addresses,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = addresses()

export default rootReducer
