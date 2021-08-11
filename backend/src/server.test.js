const app = require('./server');
const mongoose = require('mongoose');
const supertest = require('supertest');
const config = require('config');
const User = require('./models/user.model');
const { response } = require('express');
const adminOnly = require('./auth/adminOnly');

describe.skip('REST API integration tests', () => {
    const insertData = [
        {
            firstName: 'John',
            lastName: 'Test',
            email: 'john@test.com',
            active: true,
            role: 'admin', 
        },
        {
            firstName: 'Kate',
            lastName: 'Test',
            email: 'kate@test.com',
            active: true,
            role: 'user', 
        }
    ];

    beforeEach(done => {
        const { username, password, host } = config.get('database');
        mongoose
            .connect(`mongodb+srv://${username}:${password}@${host}`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => {
                done();
            })
            .catch(err => {
                console.error(err);
                process.exit();
            });
    });

    afterEach(done => {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(() => done())
        });
    });

    test('GET /user', () => {
        return User.insertMany(insertData)
            .then(() => supertest(app).get('/user').expect(200))
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toEqual(insertData.length);

                response.body.forEach((user, index) => {
                    expect(user.firstName).toBe(insertData[index].firstName);
                    expect(user.lastName).toBe(insertData[index].lastName);
                    expect(user.email).toBe(insertData[index].email);
                    expect(user.active).toBe(insertData[index].active);
                    expect(user.role).toBe(insertData[index].role);
                });
            });

    });

    test('GET /user/:id', () => {
        return User.insertMany(insertData)
            .then(response => {
                const user = response.body;
                expect(user.firstName).toBe(insertData[0].firstName);
                expect(user.lastName).toBe(insertData[0].lastName);
                expect(user.email).toBe(insertData[0].email);
                expect(user.active).toBe(insertData[0].active);
                expect(user.role).toBe(insertData[0].role);
            });
    });
});
