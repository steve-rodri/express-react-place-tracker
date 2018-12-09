const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const { placesRouter } = require("./routes/places");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.json({
    msg: "This is the Root of the Places Tracker API"
  });
});

app.use("/places", placesRouter);

app.listen(PORT, () => console.log(`Up and Running on Port: ${PORT}`));
