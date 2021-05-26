function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    const newFunc = () => console.log("this is a named function");
    return newFunc;
}

function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function");
}