const express=require("express");
const path=require("path");
const app=express();
const port=3000;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get('/', (req, res) => {
    res.render('home.ejs')
  });
  app.get('/home', (req, res) => {
    res.send("<h1>helooo</h1>");
  });
  app.get('/dice', (req, res) => {
    let dicv=Math.floor(Math.random()*6)+1;
    res.render('dice.ejs',{num:dicv});
  });
  app.get('/ig/:username',(req, res)=>{
    let {username} =req.params;
    res.render('insta.ejs',{username});
  })
  app.listen(port,()=>{
    console.log("listens...")
});