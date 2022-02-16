import {Sequelize} from 'sequelize';

const db = new Sequelize('peka22', 'root', 'Katasandi@123', {
    host:'localhost',
    dialect:'mysql'
});

export default db;

