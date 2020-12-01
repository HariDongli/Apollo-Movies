const Sequelize  = require("Sequelize");
const sequelize = require("../config/sqlInit").sequelize;

var QueryCount = sequelize.define('querycount', {
    query: { 
      type: Sequelize.STRING,
      field: 'query',
      unique: true
    },
    count: {
      type: Sequelize.INTEGER
    }
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
});



QueryCount.sync({force: true})

module.exports = {
  QueryCount
}
