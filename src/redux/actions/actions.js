
export const RECEIVE_ADDRESSES = 'RECEIVE_ADDRESSES'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function receiveAddresses(address, json) {
  return {
    type: RECEIVE_ADDRESSES,
    address,
    addresses: json.data.addresses,
    receivedAt: Date.now()
  }
}
dispatch(recieveAddresses(address,json))
