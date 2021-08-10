const loanService = jest.mock('./loan.service');

let mockData;

loanService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);

loanService.__setMockData = data => mockData = data;

module.exports = loanService;
