#!/usr/bin/env node
//console.log("HELLO WORLD");
var greet = require("../index");
var argv = require('minimist')(process.argv.slice(2));
console.log(greet(argv._[0], argv.drunk));