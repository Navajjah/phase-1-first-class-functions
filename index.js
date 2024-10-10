function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {

    function namedFunction() {
        console.log('I am a named function');
    }
    return namedFunction;
}

function returnsAnonymousFunction() {
    return function() {
        console.log('I am an anonymous function!');
    };
}