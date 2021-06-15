const payload = require("./payload.json");

module.exports = (req, res) => {
  res.status(Math.random() < 0.1 ? 500 : 200).send(payload);
};
