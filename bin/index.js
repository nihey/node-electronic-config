#!/usr/bin/env node

console.log(require('../lib')(process.argv[2] || '').join('-') || 0);
