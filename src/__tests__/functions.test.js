const { add, sub, mult, dvde, sayHello, fetchUser } = require('../functions');

//JEST Testing Library

//TO RUN TESTS WE NEED TO RUN IN THE TERMINAL NPM RUN TESTS!
//Test suites are the amount of test files we have.
//Tests are how many tests ran.

//takes two arguments, first is description of what will happen.
// Second is a callback function 
test('add() should add two numbers together', () => {
  //expect function is used every time we want to test a value.
  //expect gets a matcher in this case it is .toBe()
  expect(add(3, 8)).toBe(11)
});

test('add() should add two numbers together', () => {
  expect(add(4, 6)).not.toBeNaN() //passes
  expect(add(4, 6)).toBeNaN() //fails
});

test('reference types are special', () => {
  expect([12]).toBe([12]) //fails
  expect([12]).toEqual([12])  //passes
});

test('sayHello() should not return goodbye', () => {
  expect(sayHello()).not.toBe('goodbye') //passes
  expect(sayHello()).toBe('goodbye') //fails
});

test('object assignment should add correct properties and values', () => {
  const data = { name: 'Matt' }
  data.age = 18;
  data.favorites = { food: 'pizza' }

  expect(data).toEqual({
    name: 'Matt',
    age: 18,
    favorites: {
      food: 'pizza'
    }
  })
});

test('true should be truthy', () => {
  expect(true).toBeTruthy();
});

test('false should be falsy', () => {
  expect(false).toBeFalsy();
});

const names = ['Andrew', 'Becca']

test('names array should contain Becca', () => {
  expect(names).toContain('Becca'); //passes
  expect(names).toContain('Sarah'); //fails
  expect(names).not.toContain('Sarah') //passes
});

test('User name is Leanne', async () => {
  //this assertions(1) is saying we expect one function call to happen.
  expect.assertions(1)

  const data = await fetchUser();
  expect(data.name).toEqual('Leanne Graham')
});

describe('Math Functions', () => {
  test('multiply should return a a product', () => {
    expect(mult(3, 4)).toBe(12)
  })

  test('add should return a sum', () => {
    expect(add(3, 4)).toBe(7)
  })
})