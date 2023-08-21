// Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

function getGreeting(name) { return 'Hello ' + name + '!'; }

// a) function expression

const getGreeting = function (name) {
    return 'Hello ' + name + '!';
}

// b) arrow function syntax

const getGreeting = (name) => 'Hello ' + name + '!';