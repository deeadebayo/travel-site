const $ = require('jquery');

// const Person = require('./modules/Person');
import Person from './modules/Person';


class Adult extends Person {
    payTaxes() {
        console.log(`${this.name} owes $0 in taxes`);
    }
}

alert(`abc 321`);

let john = new Person('John Doe', 'green');
john.greet();

let jane = new Adult('Jane Smith', 'blue');
jane.greet();
jane.payTaxes();