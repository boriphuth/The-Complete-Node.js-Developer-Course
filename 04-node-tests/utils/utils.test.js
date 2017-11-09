const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            let result = utils.add(33, 11);

            expect(result)
                .toBe(44)
                .toBeA('number');
        });

        it('should add two numbers asynchronously', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum)
                    .toBe(7)
                    .toBeA('number');
                done();
            })
        });
    });

    describe('#square', () => {
        it('should give the square of a number', () => {
            let result = utils.square(5);

            expect(result)
                .toBe(25)
                .toBeA('number');
        });

        it('should give the square of a number asynchronously', (done) => {
            utils.asyncSquare(6, (square) => {
                expect(square)
                    .toBe(36);
                done();
            });
        });
    });
});

describe('Utils random', () => {
    it('should expect some values', () => {
        expect(12).toNotBe(11);

        // Below is false, uses === 
        //expect({name: 'nino'}).toBe({name: 'nino'});
        expect({ name: 'nino' }).toEqual({ name: 'nino' });
        expect({ name: 'Nino' }).toNotEqual({ name: 'nino' });

        expect([2, 3, 4]).toInclude(2);
        expect([2, 3, 4]).toExclude(1);
        expect([2, 3, 4]).toInclude(2).toExclude(1);

        expect({
            name: 'Nino'
        }).toExclude({
            name: 'nino'
        });
    });

    it('should set firstName and lastName', () => {
        let user = {
            age: 21,
            hobbies: ['Football', 'Programming']
        }

        let updatedUser = utils.setName(user, 'Nino Vrijman');

        // Objects are passed as a reference, both objects are equal
        expect(user).toEqual(updatedUser);

        expect(updatedUser)
            .toInclude({
                firstName: 'Nino',
                lastName: 'Vrijman'
            })
            .toBeA('object');
    });
});