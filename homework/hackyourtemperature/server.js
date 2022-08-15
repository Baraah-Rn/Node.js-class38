import app from "./app.js";
const port = process.env.port || 300


app.listen(port , () =>
  console.log(`app listening at http://localhost:${port}`
  ));



