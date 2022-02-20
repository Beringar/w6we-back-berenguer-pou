/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const { model, Schema, SchemaTypes } = require("mongoose");
require("mongoose-type-url");

const RobotSchema = new Schema(
  {
    name: {
      type: String,
      minLength: [3, "Name has to be at least 3 characters long!"],
      maxLength: [30, "Name has to be at most 30 characters long"],
      required: true,
    },
    image: {
      type: SchemaTypes.Url,
      required: true,
    },
    speed: {
      type: Number,
      min: [0, "Min speed has to be equal or greater than 0!"],
      max: [10, "Max speed has to be equal or less than 10!"],
      required: true,
    },
    resistance: {
      type: Number,
      min: [0, "Min resistance has to be equal or greater than 0!"],
      max: [10, "Max resistance has to be equal or less than 10!"],
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

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
