//routes, requests

const express = require('express')

const router = express.Router()

//importing services.user.js

const services = require('../services/services.user')

router.get('/', async(req, res)=>{
    const users = await services.getAllUsers()
    res.send(users.rows)
})


module.exports = router