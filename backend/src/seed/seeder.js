const fsp = require('fs').promises;
const User = require('../models/user.model');
const Book = require('../models/book.model');
const Cd = require('../models/cd.model');
const Magazine = require('../models/magazine.model');
const Loan = require('../models/loan.model');

const seedCollection = async (model, fileName) => {
    try {
        const exists = await model.find().count();
        if (!exists) {
            throw new Error();
        }
    } catch (e) {
        const source = `./${fileName}`;
        const list = require(source);
        for (let i = 0; i < list.length; i++) {
            let record = new model(list[i]);
            await record.save();
        };
    }
};

const dropCollection = async(model, collection) => {
    try {
        await model.db.dropCollection(collection);
    } catch(e) {
        console.log('COLLECTION NOT FOUND: ' + collection);
    }
};

( async () => {
    dropCollection(User, 'users');
    dropCollection(Book, 'books');
    dropCollection(Cd, 'cds');
    dropCollection(Magazine, 'magazines');
    dropCollection(Loan, 'loans');

    seedCollection(User, 'users');
    seedCollection(Book, 'books');
    seedCollection(Cd, 'cds');
    seedCollection(Magazine, 'magazines');
    seedCollection(Loan, 'loans');
})();