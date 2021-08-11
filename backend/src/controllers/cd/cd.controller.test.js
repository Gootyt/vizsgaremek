const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const cdController = require('./cd.controller');
const cdService = require('./cd.service');

jest.mock('./cd.service');

describe("cd controler", () => {
    const mockData = [{
  		"_id": "611b17c2fc13ae3026000006"
  		"performer": "Birk Mullally",
  		"title": "Procter & Gamble Manufacturing Co.",
  		"length": 45,
  		"style": "Chickasaw",
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        cdService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const CD_ID = '000000000000000000000001';

        const request = mockRequest({
            params: {
                id: CD_ID
            }
        });

        return cdController.findOne(request, response, nextFunction)
            .then( () => {
                expect(cdService.findOne).toBeCalledWith(CD_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === CD_ID)
                );                
            })
    });
});