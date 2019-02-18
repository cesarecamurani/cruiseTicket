import CruiseTicket from '../src/cruiseTicket'

let cruiseTicket

beforeEach(() => {
  cruiseTicket = new CruiseTicket()
})

describe('CruiseTicket', () => {
  it('has 2 destinations', () => {
    expect(cruiseTicket.destinations).toEqual([{name: 'san francisco', price: 2500}, {name: 'delhi', price: 1500}])
  })
})

describe('returnTicket', () => {
  it('prints out the price of a given destination', () => {
    expect(cruiseTicket.returnTicket('san francisco')).toEqual('The price of your journey to san francisco is £2500')
  })
})
