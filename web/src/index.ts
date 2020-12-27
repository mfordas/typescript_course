import { User } from './models/User';

const user = User.buildUser({ id: 8, name: 'newdsadsada' });

user.on('change', () => {
  console.log(user);
});

user.save();

user.fetch();
