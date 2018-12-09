const Sequelize = require("sequelize");

const connection = new Sequelize({
  database: "places_tracker_db",
  dialect: "postgres",
  operatorsAliases: false,
  define: {
    underscored: true
  }
});

const Place = connection.define("place", {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  address: Sequelize.TEXT,
  visited: Sequelize.BOOLEAN
});

async function testConnection (){
  try {
  await connection.sync({force:true});
  console.log('connection established')
  } catch (e) {
  console.log(e)
  } finally {
  process.exit()
  }
}

testConnection();

module.exports = {
  connection,
  Place
}
