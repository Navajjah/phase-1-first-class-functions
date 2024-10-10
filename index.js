function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    function namedFunction() {
        console.log('I am a named function');
    };
    return namedFunction;
}

function returnsAnonymousFunction() {
    return function() {
        console.log('I am an anonymous function!');
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('I am an anonymous function!');
    };
}

module.exports = {
    returnsAnAnonymousFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
};

receivesAFunction(() => console.log("Callback called!"));
const namedFunc = returnsANamedFunction();
namedFunc(); // Call the named function
const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc(); // Call the anonymous function