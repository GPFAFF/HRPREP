var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  },
  'Greg': {
    visits: 0
  }
};

function greetCustomer(firstName) {

  var greeting = 'Welcome back, ' + firstName  + '! We\'re glad you liked us the first time!';
  var firstTimeGreeting = "Welcome! Is this your first time?";
  var multipleGreeting = 'Welcome back, ' + firstName +'! So glad to see you again!';

  // check what name is passed in
  // check to see the amount of visits associated with that name
  // display proper message
    for (var name in customerData) {
      if (!customerData.hasOwnProperty(firstName)) {
        return firstTimeGreeting;
      }
      console.log("customer visits :", customerData[firstName]);
      var obj = customerData[firstName];
      for (var prop in obj) {
        console.log(firstName)
        if (obj[prop] === 0) {
          return firstTimeGreeting;
        } else if (obj[prop] === 1) {
            return greeting;
        } else {
            return multipleGreeting
        }
      }
    }
  }

var output = greetCustomer();
console.log("output: ", output);
