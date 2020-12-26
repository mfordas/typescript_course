import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.on('click', () => {
  console.log('Works');
});
user.on('click', () => {
  console.log('Works2');
});

console.log(user);
