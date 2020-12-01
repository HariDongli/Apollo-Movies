const Sequelize  = require("Sequelize");
const sequelize = require("../config/sqlInit").sequelize;

var QueryCount = sequelize.define('querycount', {
    queryKey: { 
      type: Sequelize.STRING,
      field: 'queryKey',
      unique: true
    },
    count: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    }
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
});



QueryCount.sync({force: true})

module.exports = {
  QueryCount
}
