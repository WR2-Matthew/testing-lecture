import axios from 'axios';

module.exports = {
  add: (num1, num2) => num1 + num2,

  sub: (num1, num2) => num1 - num2,

  mult: (num1, num2) => num1 * num2,

  dvde: (num1, num2) => num1 / num2,

  sayHello: () => 'Hello',

  fetchUser: async () => {

    //invoking axios is a get request
    const user = await axios('https://jsonplaceholder.typicode.com/users/1')
      .catch(err => console.log(err))

    return user.data
  }
}