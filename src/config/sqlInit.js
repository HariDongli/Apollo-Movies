const Sequelize  = require("sequelize");
var sequelize = new Sequelize('sql12379567', 'sql12379567', '1fMBhG81nW', {
    host: 'sql12.freemysqlhosting.net',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    // SQLite only
    // storage: 'path/to/database.sqlite'
});

module.exports ={
    sequelize
}
