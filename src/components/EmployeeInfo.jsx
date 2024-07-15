import React, { useState } from "react"
import EditEmployee from "./EditEmployee"
import { useNavigate } from "react-router-dom"
import axios from "axios"



function EmployeeInfo({id,name,salary,role,contract}){
    const [open,setOpen] = useState(false)
    const chat = useNavigate()
    const [edit,setEdit] =useState({
        id:id,
        name:'',
        salary:'',
        role:''

    })
    const [edited,setEdited] = useState(false)


    const sendEdit = (async()=>{
        if(edit.name !=='' || edit.salary !==''|| edit.cargo!==''){
            await axios.patch('http://localhost:3333/editar',edit,{headers:{'Content-Type':'application/json','method':'patch'}}).then(console.log('req')).then(setEdited(true))

        }else console.log('no edit')
    })

    const sendDelete = (async()=>{
        await axios.delete('http://localhost:3333/excluir%20funcionario/'+edit.id)
    })

    return(
        <>
        <div className="employInfo">
            <span>Nome: {name}</span>
            <span>Salario: {salary}</span>
            <span>Cargo: {role}</span>
             <div className="userImg">
                <img src="" alt="" />
            </div>
            <button onClick={()=>{
                setOpen(true)
            }} className="employOptionsButton">Editar</button>

            <button
            onClick={()=>{
               chat('/chat')
            }}
             className="employOptionsButton">Chat</button>
        </div>

        <EditEmployee open={open}>
        <div id="editModal">
            <button onClick={sendDelete} id="deleteBtn">/</button>
        <button onClick={()=>{
                if(open == true){
                    setOpen(false)
                }
            }} id="closeModal">X</button>
            <div id="modalInfo">
                <input onChange={(e)=>{
                    if(e.target.defaultValue !== e.target.value){
                        setEdit({...edit,name:e.target.value})
                        console.log(edit)} 
                }} 
                type="text" 
                defaultValue={name}/>

                <input
                onChange={(e)=>{
                    e.target.defaultValue = e.target.value
                    setEdit({...edit,salary:e.target.value})
                    e.stopPropagation()
                }} 
                type="text" 
                defaultValue={salary}/>

                <input 
                onChange={(e)=>{
                    e.target.defaultValue = e.target.value
                    setEdit({...edit,role:e.target.value})
                    e.stopPropagation()
                }}
                type="text" 
                defaultValue={role}/>
                <button
                onClick={sendEdit} 
                className="editBtn"
                >Editar</button>
                {edited&& <span id="editSucess" >Editado Com Sucesso!</span>}
            </div>
        </div>

            
        </EditEmployee>
        </>
    )
}
export default EmployeeInfo