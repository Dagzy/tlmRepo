import Sequelize from 'sequelize';
import UserModel from './models/user';
const sequelize = new Sequelize('testing','root','Bigmoney2019!', {
  host: '127.0.0.1',
  dialect: 'mysql',

})
// const sequelize = new Sequelize('users', 'test', 'test1234', {
// });

const User = UserModel(sequelize, Sequelize);

sequelize.sync().then(() => {
  // eslint-disable-next-line no-console
  console.log('Users db and user table have been created');
});

module.exports = User;
