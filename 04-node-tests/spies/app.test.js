const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    }
    // Classes / variable you want to mock shouldn't be declared as a Constant, if they're a constant it's not possible for rewire to mock the class instance / variable
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('Nino', 21);
        expect(spy).toHaveBeenCalledWith('Nino', 21);
        // spy();
        // expect(spy).toHaveBeenCalled();
    });

    it('should call saveUser with user object', () => {
        const email = 'nino@test.nl';
        const password = 'test';

        app.handleSignup(email, password)
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    });
});