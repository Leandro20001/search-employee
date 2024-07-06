
const express = require('express')
const app = express()
const cors = require('cors')
const sequelize = require('../db.cjs')
const db = sequelize.Employees
const bodyparser = require('body-parser')

const response = db.findAll().then(()=>{
    console.log(response)})

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(cors())

app.get('/list',(req,res)=>{
    const response = db.findAll().then((values)=>{
        res.send(values)})
})

app.get('/teste',(req,res)=>{
    res.send({msg:'ola'})
})

app.post('/novo%20funcionario',async(req,res)=>{
    db.create(
        {name: await req.body.name,
        salary: await req.body.salary,
        role: await req.body.role,
    }).then
        (console.log('Employee added sucessfully!'))
    
    res.send('Funcionario Adicionado')
})


app.delete('/excluir%20funcionario',async(req,res)=>{
    db.destroy({
        where :{
            salary : req.body.salary
        }
    })
    res.send('usuario deletado')
})





app.listen(3333,()=>{
    console.log('API ligada')
})
