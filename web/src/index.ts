import { User } from './models/User';

const user = new User({ id: 8, name: 'name8', age: 0 });

user.on('save', () => {
  console.log(user);
});

user.save();
