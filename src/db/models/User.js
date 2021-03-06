/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const { model, Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      immutable: true, // Make `createdAt` immutable
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const User = model("User", UserSchema, "users");

module.exports = User;
