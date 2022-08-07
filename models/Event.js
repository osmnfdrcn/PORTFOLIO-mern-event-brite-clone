const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'You should provide an event title'],
      maxlength: 50,
    },
    description: {
      type: String,
      required: [true, 'You should provide an event description'],
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
    language: {
      type: String,
      required: [true, 'You should provide event language'],
    },
    location: {
      street: {
        type: String,
        required: [true, 'You should provide all values of location of event '],
      },
      district: {
        type: String,
        required: [true, 'You should provide all values of location of event '],
      },
      city: {
        type: String,
        required: [true, 'You should provide all values of location of event '],
      },
      country: {
        type: String,
        required: [true, 'You should provide all values of location of event '],
      }
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'You should provide the creator of event'],
    },
    date: {
      type: Date
    },
    image: {
      // public_id: {
      //   type: String,
      //   required: true,
      // },
      url: {
        type: String,
        // required: true,
      },
    },
    category: {
      type: String
    },
    attendees: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: true,
        }
      },
    ],
    tags: {
      type: Array
    }

  },
  { timestamps: true }
)

module.exports = mongoose.model("Event", EventSchema);
