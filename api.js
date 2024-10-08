import express from "express"
// import bodyParser from "body-parser";
import axios from "axios";


  const port = process.env.PORT|| 4000;

  const app = express();
//   app.set('view engine', 'ejs');
  app.use(express.urlencoded({extended:true}));
  app.use(express.json());
  

  

  app.get("/recipes",(req,res)=>{
    console.log(recipes)
    res.json(recipes)
  })

app.post("/recipes/add",(req,res)=>{
  const new_id = recipes.length+1
  console.log(req.body)
  const new_recipe = {
    id: new_id,
    Dish_name: req.body.Dish_name,
    Ingredients: req.body.Ingredients,
    Steps: req.body.Steps
  };
  recipes.push(new_recipe)
  console.log(recipes)
  res.status(201).json(recipes)
})




  app.listen(port,()=>{
    console.log("Server is running on port:",port)
  })


  let recipes = [
    {
      id: 1,
      Dish_name: 'Chicken curry',
      Ingredients: 'Chicken',
      Steps:
        'Cook Chicken',
    },
    {
        id: 2,
        Dish_name: "Mutton Fry",
        Ingredients: "Mutton",
        Steps:
          "Cook Mutton",
      },
      {
        id: 3,
        Dish_name: "Potato curry",
        Ingredients: "Potato",
        Steps:
          "Cook Potato",
      },
  ];
