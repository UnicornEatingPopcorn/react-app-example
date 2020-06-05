import {
  SET_VISIBILITY_FILTER,
  RECEIVE_ADDRESSES,
  VisibilityFilters
} from '../actions/actions'

const initialState = {
  VisibilityFilters: VisibilityFilters.SHOW_ALL,
  addresses: []
}

function addresses( state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case RECEIVE_ADDRESSES:
      return Object.assign({}, state, {
        addresses: [...state.addresses]
      })
    default:
      return state
  }
}
