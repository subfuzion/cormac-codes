import { argv } from 'node:process';

import {add} from "./lib/lib";

// first arg is path to node
// second arg is path to the module
// ensure there are at least two additional args to sum
if (argv.length < 4) {
  console.log("Call program with two numbers");
  process.exit(1);
}

let args = argv.slice(2);
let sum = N(args[0]);
const n = args.length - 1;

for (let i = 1; i <= n; i++) {
   sum = add(sum, N(args[i]));
}

console.log(sum);


function N(s: string): number {
  return parseInt(s, 10);
}
