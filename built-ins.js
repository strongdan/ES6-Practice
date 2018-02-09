// covers symbols, sets, WeakSets, Maps, WeakMaps, Promises, Proxies, Generators

// Proxies
// The Proxy object is used to define custom behavior for fundamental operations 
// (e.g. property lookup, assignment, enumeration, function invocation, etc).
// Basic Syntax => var p = new Proxy(target, handler);

// A Pass Through Proxy
// The simplest way to create a proxy is to provide an object and then an empty handler object.
var richard = {status: 'looking for work'};
var agent = new Proxy(richard, {});

agent.status; // returns 'looking for work'

// Get Trap
// The get trap is used to "intercept" calls to properties:
const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        console.log(target); // the `richard` object, not `handler` and not `agent`
        console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
    }
};
const agent = new Proxy(richard, handler);
agent.status; // logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)

// Accessing the Target object from inside the proxy
// If we wanted to actually provide the real result, we would need to return the property on the target object:
const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        console.log(target);
        console.log(propName);
        return target[propName];
    }
};
const agent = new Proxy(richard, handler);
agent.status; // (1)logs the richard object, (2)logs the property being accessed, (3)returns the text in richard.status

// Having the proxy return info, directly
// Alternatively, we could use the proxy to provide direct feedback:
const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        return `He's following many leads, so you should offer a contract as soon as possible!`;
    }
};
const agent = new Proxy(richard, handler);
agent.status; // returns the text `He's following many leads, so you should offer a contract as soon as possible!`


// Basic Example
var handler = {
    get: function(target, name) {
        return name in target ?
            target[name] :
            37;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37
