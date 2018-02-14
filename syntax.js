// covers syntax changes, iteration, the spread operator and the rest parameter

// ES6 Template Strings utilize backticks rather than quotes
// they allow for string substitution, math or calling functions
let name = 'Dan';
console.log(`Hello, my name is ${name}`);

// multiline strings no longer require a backslash or plus sign
console.log(`my first line
             and my second line.`);

// Tagged templates place a function name before the template string, creating a special type of function
fn`Hello ${you}! You're looking ${adjective} today!`

// Example: return a string with the appropriate variables substituted in, but with all HTML-unsafe characters replaced
html`<p title="${title}">Hello ${you}!</p>`






