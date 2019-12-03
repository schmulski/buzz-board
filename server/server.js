const mongoose = require("mongoose");
const Events = require("./models/Events");
const express = require("express");

mongoose.connect("mongodb://localhost:27017/buzzboard", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Express ready on port ${PORT}`));

app.get("/events", (req, res) => {
  Events.find()
    .then(events => res.json(events))
    .catch(err => res.json(err));
});
