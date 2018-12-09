const { connection } = require("./models");

async function run() {
  try {
    await connection.sync({ force: true });
  } catch (e) {
    console.log("Could not Reset DB", e);
  } finally {
    process.exit();
  }
}

run();
