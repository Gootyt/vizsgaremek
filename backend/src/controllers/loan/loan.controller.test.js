const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const loanController = require('./loan.controller');
const loanService = require('./loan.service');

jest.mock('./loan.service');

describe("loan controler", () => {
    const mockData = [{
  		"_id": "611b2196fc13ae7d6000019c"	
  		"borrower": {"_id": "611977d56d34ab001467911d"},
 		 "loanedbook": {"_id": "611b13dcfc13ae18ce000000"},
 		 "loandate": "2021-08-06 07:22:46",
 		 "loanend": "2021-09-27 10:43:44",
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        loanService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const LOAN_ID = 1;

        const request = mockRequest({
            params: {
                id: LOAN_ID
            }
        });

        return loanController.findOne(request, response, nextFunction)
            .then( () => {
                expect(loanService.findOne).toBeCalledWith(LOAN_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === LOAN_ID)
                );                
            })
    });
});