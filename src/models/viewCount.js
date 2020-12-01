const Sequelize  = require("sequelize");
const sequelize = require("../config/sqlInit").sequelize;

var ViewCount = sequelize.define('viewcount', {
    movieId: { 
      type: Sequelize.STRING,
      field: 'movie_id',
      unique: true
    },
    count: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    }
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
});


ViewCount.sync({force: true}) 


module.exports = {
  ViewCount
}