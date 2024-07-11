import { Employees } from "../../db.mjs";

export function Oi(req,res){
    res.send('oi')
}

export async function Post(req,res){
    Employees.create(
        {name: req.body.name,
        salary: req.body.salary,
        role: req.body.role,
    }).then
        (console.log('Employee added sucessfully!'))
    
    res.send('Funcionario Adicionado')
}

export async function Get(req,res){
    const response = Employees.findAll().then((values)=>{
        res.send(values)})
}

export async function Delete(req,res){
    Employees.destroy({
        where :{
            salary : req.body.salary
        }
    })
    res.send('usuario deletado')
}
