// Call method:

const personCall = {
    name: 'Abhishek',
    greet: function(message) {
      console.log(`${message}, ${this.name}!`);
    }
  };
  
  const anotherPersonCall = {
    name: 'Ranjit'
  };
  
  personCall.greet.call(anotherPersonCall, 'Hello');
  // Output: Hello, Ranjit!
  
// =====================================================

// Apply method:

const personApply = {
  name: 'Abhishek',
  greet: function(message) {
    console.log(`${message}, ${this.name}!`);
  }
};

const anotherPersonApply = {
  name: 'Ranjit'
};

personApply.greet.apply(anotherPersonApply, ['Hello']);
// Output: Hello, Ranjit!

// ======================================================

// Bind Method

const personBind = {
  name: 'Abhishek',
  greet: function(message) {
    console.log(`${message}, ${this.name}!`);
  }
};

const anotherPersonBind = {
  name: 'Ranjit'
};

const greetRanjit = personBind.greet.bind(anotherPersonBind);
greetRanjit('Hello');
// Output: Hello, Ranjit!


