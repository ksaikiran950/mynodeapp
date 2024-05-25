// routes, requests

const express = require('express')

const router = express.Router()

// importing services.user.js

const services = require('../services/services.user') 

router.get("/", async(request,response) => {
    const users = await services.getAllUsers()
    response.send(users.rows)
})

router.get("/users", async(request,response) => {
    const users = await services.getAllUsers()
    response.send(users)
})

router.post("/createuser/", async(request,response) => {
    const data = request.body
    const users = await services.createUser(data)
   //console.log(data)
    
     response.json({message:"user added successfully"})
    
})

router.get("/user/:name/", async(request, response)=> {
    const name = request.params.name
    const user = await services.getUser(name)
    response.send(user.rows)

})

router.put("/updateuser/:name", async(request, response) => {
    const name = request.params.name
    const data = request.body
    const updateduser = await services.updateUser(name, data)
    response.json({message:"User is updated"})
})


router.delete("/deleteuser/:name", async(request, response) => {
    const name = request.params.name
    // const data = request.body
    const deleteduser = await services.deleteUser(name)

    response.json({message:`${name} is Deleted successfully`})
})




module.exports = router