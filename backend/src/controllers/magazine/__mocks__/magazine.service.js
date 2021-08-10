const magazineService = jest.mock('./magazine.service');

let mockData;

magazineService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);

magazineService.__setMockData = data => mockData = data;

module.exports = magazineService;
