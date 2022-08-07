const mongoose = require("mongoose");

const TagSchema = new mongoose.Schema(
  {
    tag: {
      type: String,
    },
    events: {
      type: Array
    },

  },
  { timestamps: true }
)
module.exports = mongoose.model("Tag", TagSchema);

