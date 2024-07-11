import http from 'http'
import express from 'express'
const app = express()
//const server = http.createServer(app)
//const websocket = new WebSocket.Server({server})

import cors from 'cors'
import bodyParser from 'body-parser'
import { Employees } from '../db.mjs'
import {Oi,Post,Get,Delete} from './controlers/EmployeeController.mjs'



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.get('/list',Get)

app.get('/teste',Oi)

app.post('/novo%20funcionario',Post)


app.delete('/excluir%20funcionario',Delete)





app.listen(3333,()=>{
    console.log('API ligada')
})
