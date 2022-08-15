
import app from "../app.js"
import supertest from "supertest";
// import request from "supertest";
const request = supertest(app);

describe("POST /weather", () => {
  it("returns location temperature if cityName is passed ", async() => {
    const response = await request(app).post('/weather').send({cityName : "Amsterdam"});
    expect(response.status).toBe(200);
  });


  it('returns bad request if cityName is missing', async () => {
    const res = await request(app).post('/weather').send({cityName : "Amsterdam"});
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual('you need to pass a cityName');
  });

});