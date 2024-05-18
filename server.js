// web server create

// importing express



const express = require ("express");
//importing db.js
const db =  require("./db");

const app = express()


//import controllers router
const routes = require("./controllers/controller.user")

app.use("/api",routes)



// use(route, function)

//app.use(express.json())

//app.get("/", (request, response) => {
  //  response.send("Hello myapp");
//})

//app.get("/newapp", (request,response) => {
   // response.send("Hello world");
//})

db.connect().then(() => console.log("Database is Connected"))
.then(() => {
    // listen(port, function)
    // funtion return server start or fail
    app.listen(5000, () => {
        console.log("Running on port 5000");
    })
})