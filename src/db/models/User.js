/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const { model, Schema, SchemaTypes } = require("mongoose");

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

const User = model("User", UserSchema, "user");

module.exports = User;
