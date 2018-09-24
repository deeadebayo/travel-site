const Person = require('./modules/Person'),
    $ = require('jquery');


alert(`abc 321`);

let john = new Person('John Doe', 'green');
john.greet();

let jane = new Person('Jane Smith', 'blue');
jane.greet();