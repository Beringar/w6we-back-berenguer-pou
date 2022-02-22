const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const connectToMongoDB = require("../../db");
const User = require("../../db/models/User");

let DB;

beforeAll(async () => {
  DB = await MongoMemoryServer.create();
  const uri = DB.getUri();
  await connectToMongoDB(uri);
  User.deleteMany({});
});
afterAll(() => {
  mongoose.connection.close();
  DB.stop();
});
