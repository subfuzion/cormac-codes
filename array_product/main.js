import assert from 'node:assert/strict'

const tests = [
  {
    input: [1, 2, 3, 4],
    expect: [24, 12, 8, 6],
  },
];

function runTests(fn) {
  let pass = 0;
  let fail = 0;
  for (let i = 0; i < tests.length; i++) {
    const t = tests[i];
    const input = t.input;
    const expect = t.expect;
    const actual = fn(input);
    try {
      assert.deepEqual(actual, expect);
      console.log(`Test #${i+1}: ✅`);
      pass++;
    } catch (e) {
      console.log(`Test #${i+1}: ❌`);
      fail++;
      console.log(e.message);
    }
    console.log('-------------');
  }
  console.log(`${tests.length} test(s).\nPASS: ${pass}\nFAIL: ${fail}`);
}

function productize(source) {
  const result = [];

  let product = 1;
  for (let i = 0; i < source.length; i++) {
    product *= source[i];
  }

  for (let i = 0; i < source.length; i++) {
    result[i] = Math.floor(product / source[i]);
  }

  return result;
}

runTests(productize);
