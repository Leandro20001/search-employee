import http from 'http'
import express from 'express'
const app = express()
//const server = http.createServer(app)
//const websocket = new WebSocket.Server({server})

import cors from 'cors'
import bodyParser from 'body-parser'
import { Employees } from '../db.mjs'
import {Post,Get, Edit} from './controlers/EmployeeController.mjs'
//Delete



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.get('/list',Get)
app.post('/novo%20funcionario',Post)
app.patch('/editar',Edit)
app.delete('/excluir%20funcionario/:id',(req,res)=>{
    Employees.destroy({
        where :{
            id : req.params.id
}}) 
res.send('employee deleted')})






app.listen(3333,()=>{
    console.log('API ligada')
})
