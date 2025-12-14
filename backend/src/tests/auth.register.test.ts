import request from "supertest";
import app from "../app";

describe("Auth API - Register", () => {
  it("should fail if email is missing", async () => {
    const res = await request(app).post("/api/auth/register").send({
      password: "password123",
    });

    expect(res.status).toBe(400);
  });

  it("should fail if password is missing", async () => {
    const res = await request(app).post("/api/auth/register").send({
      email: "testuser@test.com",
    });

    expect(res.status).toBe(400);
  });

  it("should fail if password is too short", async () => {
    const res = await request(app).post("/api/auth/register").send({
      email: "testuser@test.com",
      password: "123",
    });

    expect(res.status).toBe(400);
  });

  it("should register a new user and return 201", async () => {
    const res = await request(app).post("/api/auth/register").send({
      email: "testuser@test.com",
      password: "password123",
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("token");
  });

  it("should not allow duplicate email", async () => {
    await request(app).post("/api/auth/register").send({
      email: "duplicate@test.com",
      password: "password123",
    });

    const res = await request(app).post("/api/auth/register").send({
      email: "duplicate@test.com",
      password: "password123",
    });

    expect(res.status).toBe(409);
  });
});
