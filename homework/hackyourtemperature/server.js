
const express = require('express');

const app = express();
app.use(express.json());

const port = process.env.port || 3000;


app.get('/', (req, res)=>{
  if(req.url === '/'){
    res.setHeader("Content-Type", "text/plain");
    res.send("hello from backend to frontend!");
    res.end();
  }else{
    alert("404... Something happened, PLease try again")
  }
});


app.post('/weather', (req, res)=>{
  const cityName = req.body.cityName
  res.setHeader("Content-Type", "text/plain");
    if(!cityName){
      return res.send({message : "OOPS... Please enter City Name"})
    }
  res.send(cityName);
  res.end();
})




app.listen(port , () =>
  console.log(`app listening at http://localhost:${port}`
  ));
