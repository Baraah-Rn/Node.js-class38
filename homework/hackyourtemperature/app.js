import express from "express";
import fetch from "node-fetch";
import { keys } from "./sources/keys.js";


const app = express();
app.use(express.json());



app.get('/',(req, res)=>{
  if(req.url === '/'){
    res.setHeader("Content-Type", "text/plain");
    res.send("hello from backend to frontend!");
    res.end();
  }else{
    alert("404... Something happened, PLease try again")
  }

});
app.post('/weather', async (req, res)=>{
  const cityName = req.body.cityName
  const fetchUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${keys.API_KEY}&units=metric`);
  const weatherData = await fetchUrl.json()
  try{
   if (!cityName) {
    return res.status(400).json(
      { weatherText: "City is not found!" }
    ) }
      res.status(200).json(
        {weatherText: ` In ${weatherData.name} the temperature is ${main.temp} `}
      )
 }
  catch{
    res.status(400).json(`${cityName} is not found!`)
  }
})



export default app;
