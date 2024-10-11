//Index


import express from "express"
import axios from "axios";
import bodyParser from "body-parser";
// import pg from "pg";






const port = process.env.PORT|| 3000;
const api_url = "https://recipes-kbds.onrender.com"
const app = express();
//   app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/recipes", async(req,res)=>{
    // const response = await axios.get("http://localhost:4000/recipes")
    const response = await axios.get("https://recipes-kbds.onrender.com/recipes")
    console.log(response.data)

    res.render("index.ejs",{recipes:response.data})
  })


app.get("/recipes/new",(req,res)=>{
  const data = {submit:"Submit"}
  res.render("add.ejs",data)
})


app.post("/recipes/add",async(req,res)=>{
  try{
    const response = await axios.post("https://recipes-kbds.onrender.com/recipes/add",req.body)
    // console.log(response.data);
    res.redirect("/recipes")
  } catch(error){
    res.status(500).json({message:"Error creating Recipe "});
  }
})

  app.listen(port,()=>{
    console.log("Server is running on port:3000")
  })

