const cdService = jest.mock('./cd.service');

let mockData;

cdService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);

cdService.__setMockData = data => mockData = data;

module.exports = cdService;
