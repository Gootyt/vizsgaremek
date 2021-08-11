const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const bookController = require('./book.controller');
const bookService = require('./book.service');

jest.mock('./book.service');

describe("book controller", () => {
    const mockData = [{
  		 "_id": "611b13dcfc13ae18ce000000"
 		 "writer": "Carina Hubeaux",
 		 "title": "Cardinal Health",
 		 "length": 497,
 		 "style": "Tongan",
 		 "onloan": true,
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        bookService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const BOOK_ID = 1;

        const request = mockRequest({
            params: {
                id: BOOK_ID
            }
        });

        return bookController.findOne(request, response, nextFunction)
            .then( () => {
                expect(bookService.findOne).toBeCalledWith(BOOK_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === BOOK_ID)
                );                
            })
    });
});