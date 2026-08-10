import supertest from "supertest";
import app from "../app.js";
import samurais from "../utils/samurais.js";

const api = supertest(app);

beforeEach(() => {
  samurais.resetToInitial();
});

describe("GET /api/samurais", () => {
  test("returns samurais as json", async () => {
    await api
      .get("/api/samurais")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("returns all initial samurais", async () => {
    const response = await api.get("/api/samurais");
    expect(response.body).toHaveLength(3);
  });

  test("returned samurais include Miyamoto Musashi", async () => {
    const response = await api.get("/api/samurais");
    const names = response.body.map((samurai) => samurai.name);
    expect(names).toContain("Miyamoto Musashi");
  });
});

describe("POST /api/samurais", () => {
  test("successfully creates a new samurai", async () => {
    const newSamurai = {
      name: "Yagyu Munenori",
      clan: "Yagyu",
      weapon: "Katana",
    };

    await api
      .post("/api/samurais")
      .send(newSamurai)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const response = await api.get("/api/samurais");
    const names = response.body.map((samurai) => samurai.name);
    expect(response.body).toHaveLength(4);
    expect(names).toContain("Yagyu Munenori");
  });

  test("fails with status 400 if required fields are missing", async () => {
    const invalidSamurai = { name: "Incomplete Samurai" };

    await api.post("/api/samurais").send(invalidSamurai).expect(400);
  });
});

describe("DELETE /api/samurais/:id", () => {
  test("successfully deletes an existing samurai", async () => {
    await api.delete("/api/samurais/1").expect(204);

    const response = await api.get("/api/samurais");
    expect(response.body).toHaveLength(2);
  });
});
