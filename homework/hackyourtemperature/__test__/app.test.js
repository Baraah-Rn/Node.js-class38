
import app from "../app.js"
import supertest from "supertest";

const request = supertest(app)


describe("POST /weather", () => {
  it('returns location temperature if cityName is passed', async() => {
    const res = await request.post('/weather').send({cityName : "Amsterdam"});
    expect(res.statusCode).toBe(200);
  });


  it('returns bad request if cityName is missing', async () => {
    const res = await request.post('/weather').send({});
    expect(res.statusCode).toBe(400);
  });

});