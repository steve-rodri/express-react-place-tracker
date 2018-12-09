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
