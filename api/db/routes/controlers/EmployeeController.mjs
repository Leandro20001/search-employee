import { Employees } from "../../db.mjs";

export async function Get(req,res){
    const response = Employees.findAll().then((values)=>{res.send(values)})
}
export async function Post(req,res){
    Employees.create(
        {name: req.body.name,
        salary: req.body.salary,
        role: req.body.role,
        contract:req.body.contract
    }).then
        (console.log('Employee added sucessfully!'))
    
    res.send('Funcionario Adicionado')
}

export async function Edit(req,res){

    if(req.body.name!==''){
        Employees.update(
            {
                name:req.body.name,
            },
            {
                where:{
                    id: req.body.id,           
    }})
    }else console.log('sem novo nome')

    if(req.body.salary!=='' && req.body.salary!==undefined){
        Employees.update(
            {
                salary:req.body.salary
            },
            {
                where:{
                    id: req.body.id,           
    }})
    }else console.log('sem novo salario')

    if(req.body.role!=='' && req.body.role!==undefined){
        Employees.update(
            {
                role:req.body.role
            },
            {
                where:{
                    id: req.body.id,           
    }})
    }else console.log('sem novo cargo')
}

//export async function Delete(req,res){
   // Employees.destroy({
    //    where :{
     //       id : req.body.id
//}})
//res.send('usuario deletado')
//}
