#!/usr/bin/env node

'use strict';

console.log(1);

const argv = require('yargs').argv;

if (argv.l == 'zh-cn') {
    console.log('Chinese site!')
} else if (argv.l == 'en') {
    console.log('English site!')
}