import { Book } from "./book";
import { User } from "./user";

export class Loan {
    _id: string = '';
    borrower: User = new User();
    loanedbook: Book = new Book();
    loandate: Date = new Date();
    loanend: Date = new Date();
}
