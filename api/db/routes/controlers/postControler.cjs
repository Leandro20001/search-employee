const express = require('express')
const cors = require('cors')
const sequelize = require('../db.cjs')
const bodyparser = require('body-parser')
const db = sequelize.Employees

const newUser = db.create(
    {name: await req.body.name,
    salary: await req.body.salary,
    role: await req.body.role,
}).then
    (console.log('Employee added sucessfully!'))

res.send('Funcionario Adicionado')

module.exports = {
    newUser
}
