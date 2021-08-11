const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const magazineController = require('./magazine.controller');
const magazineService = require('./magazine.service');

jest.mock('./magazine.service');

describe("magazine controler", () => {
    const mockData = [{
  	      "_id": "611b0717fc13ae48fd000000"
 	      "title": "Greenstone LLC",
              "year": 2011,
              "month": 1,
              "description": "TH"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        magazineService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const MAGAZINE_ID = 1;

        const request = mockRequest({
            params: {
                id: MAGAZINE_ID
            }
        });

        return magazineController.findOne(request, response, nextFunction)
            .then( () => {
                expect(magazineService.findOne).toBeCalledWith(MAGAZINE_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === MAGAZINE_ID)
                );                
            })
    });
});