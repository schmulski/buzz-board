const mongoose = require("mongoose");

const eventSchema = {
  title: String,
  startDate: String,
  durationInHours: Number,
  recurrenceInDays: Number
};

module.exports = mongoose.model("Events", eventSchema);
