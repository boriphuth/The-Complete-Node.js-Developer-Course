// File run by QuokkaJS

var square = x => x * x;

result = square(9)

result

var user = {
    name: 'nino',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi ${this.name}`);
    },
    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi ${this.name}`);
    }
}

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);