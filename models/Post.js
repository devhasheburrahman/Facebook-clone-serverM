const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    images: [
      {
        type: String,
        required: false,
      }
    ],

    userName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    userPhoto: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
