export const REQUEST_ADDRESSES = 'REQUEST_ADDRESSES'

function requestAddresses(address) {
  return {
    type: REQUEST_ADDRESSES,
    address
  }
}

export const RECEIVE_ADDRESSES = 'RECEIVE_ADDRESSES'

function receiveAddresses(address, json) {
  return {
    type: RECEIVE_ADDRESSES,
    address,
    addresses: json.data.addresses,
    receivedAt: Date.now()
  }
}
