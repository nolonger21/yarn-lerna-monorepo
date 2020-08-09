const { test } = require('pkg-a');
const merge = require('lodash/merge');

console.info('example', test);
test();
console.info('lodash', merge);