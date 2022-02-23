const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const request = require("supertest");
const connectToMongoDB = require("../../db");
const User = require("../../db/models/User");
const app = require("../index");

let DB;

beforeAll(async () => {
  DB = await MongoMemoryServer.create();
  const uri = DB.getUri();
  await connectToMongoDB(uri);
  User.deleteMany({});
});
afterAll(async () => {
  await mongoose.connection.close();
  await DB.stop();
});

beforeEach(async () => {
  User.create({
    username: "Beringar",
    password: "$2b$10$CTmxgzRw/E2bCPiXk0j0Pe7BHbj3YQhA/adwhuNsU.pIlE4LO97Fy",
    name: "Perico",
  });
});

describe("Given a usersRouter", () => {
  describe("When it receives a POST request at /user/login with body {'username': 'Beringar', 'password': 'asasas'}", () => {
    test("Then it should respond with status 200 and an object with a property 'token'", async () => {
      const newUser = { username: "Beringar", password: "asasas" };

      const { body } = await request(app)
        .post("/users/login")
        .send(newUser)
        .expect(200);

      // TODO: guardar token

      expect(body).toHaveProperty("token");
    });
  });
});
