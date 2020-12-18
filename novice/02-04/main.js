// Error Handling

// try, catch, finally

function f() {
    try {
      console.log('start');
      return "result";
    } catch (e) {
      /// ...
    } finally {
      console.log('cleanup!');
    }
}
  
// f(); // cleanup!

// throw

function f2() {
    try {
      console.log('start');
      throw new Error("an error");
    } catch (e) {
      // ...
      if("can't handle the error") {
        throw e;
      }
  
    } 
    finally {
      console.log('cleanup!');
    }
  }
  
f2(); // cleanup!

// Custom Error

class ValidationError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "Validation Error"; // (2)
    }
}

function test() {
    throw new ValidationError("Whoops!");
}

try {
    test();
} catch(err) {
    console.log(err.message); // Whoops!
    console.log(err.name); // Validation Error
}

class ValidError extends Error {
    constructor(message) {
        super(message);
        this.name = "Validation Error";
    }
}

// Usage
function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
        throw new ValidError("No field: age");
    }
    if (!user.name) {
        throw new ValidtionError("No field: name");
    }

    return user;
}

// Working exampe with try..catch

try {
    let user = readUser('{ "age" : 24, "name" : "ali" }');
    console.log(user);
} catch (err) {
    if (err instanceof ValidError) {
        console.log("Invalid data: " + err.message); // Invalid data: No field: name
    } else if (err instanceof SyntaxError) {
        console.log("JSON Syntax Error: " + err.message);
    } else {
        throw err; // unknown error, rethrow it (**)
    }
}