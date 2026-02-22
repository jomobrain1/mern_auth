const { default: mongoose } = require("mongoose");

const sessionSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
