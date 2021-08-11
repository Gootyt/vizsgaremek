const baseService = jest.mock('./service');

let mockData;

baseService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);

baseService.__setMockData = data => mockData = data;

module.exports = baseService;
