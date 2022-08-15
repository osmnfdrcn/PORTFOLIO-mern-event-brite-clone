const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    // required: [true, 'Please provide a first name'],
    minlength: [2, 'First name should be longer than 1 characters'],
    maxlength: 30
  },
  lastName: {
    type: String,
    // required: [true, 'Please provide a last name'],
    minlength: [2, 'Last name should be longer than 2 characters'],
    maxlength: 30
  },
  email: {
    type: String,
    required: [true, 'Please provide a email'],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email'
    }
  },
  password: {
    type: String,
    required: [true, ' Please provide a password'],
    minlength: [8, 'Password should be at least 8 characters']
  },
  address: {
    neighborhood: {
      type: String,
      default: ""
    },
    city: {
      type: String,
      default: ""
    },
    country: {
      type: String,
      default: ""
    },
    zip: {
      type: String,
      default: ""
    },
  },
  avatar: {
    public_id: {
      type: String,
      default: "0"
    },
    url: {
      type: String,
      default: "https://res.cloudinary.com/taracat/image/upload/v1660517430/mern_sample/Unknown_person_u0k0v6.jpg"
    },
  },
  status: {
    type: String,
    enum: ['Pending', 'Active'],
    default: 'Pending'
  },
  verification: {
    code: {
      type: String,
    },
    start: {
      type: Date,
      default: Date.now
    },
    end: {
      type: Date,
      default: () => Date.now() + 3 * 24 * 60 * 60 * 1000 // 3 days
    }
  },
  followers: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        required: true,
      },
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      }
    },
  ],
  followings: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        required: true,
      },
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      }
    },
  ],
  googleId: {
    type: String
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]

}, { timestamps: true })

UserSchema.virtual('events', {
  ref: 'Event',
  localField: '_id',
  foreignField: 'owner'
})


UserSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()
  delete userObject.password
  delete userObject.tokens
  delete userObject.createdAt
  delete userObject.updatedAt
  return userObject
}

UserSchema.methods.generateAuthToken = async function (action) {
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
  user.tokens = user.tokens.concat({ token })
  if (action === 'register') { user.verification.code = token }
  await user.save()
  return token
}

UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})


UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password)
  return isMatch
}

module.exports = mongoose.model("User", UserSchema);
