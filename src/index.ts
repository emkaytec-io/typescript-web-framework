import { User } from './models/User';

const user = new User({ id: 3 });
user.fetch();

user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change');
