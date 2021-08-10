const bookService = jest.mock('./book.service');

let mockData;

bookService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);

bookService.__setMockData = data => mockData = data;

module.exports = bookService;
