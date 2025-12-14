import request from "supertest";
import app from "../app";

describe("Auth API - Register", () => {
  it("should register a new user and return 201", async () => {
    const res = await request(app).post("/api/auth/register").send({
      email: "testuser@test.com",
      password: "password123",
    });

    expect(res.status).toBe(201);
  });
});
