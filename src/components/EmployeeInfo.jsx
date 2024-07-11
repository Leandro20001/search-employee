import React, { useState } from "react"
import EditModal from "./EditModal"
import { useNavigate } from "react-router-dom"



function EmployeeInfo({name,salary,role,contract}){
    const chat = useNavigate()

    const [open,setOpen] = useState(false)
    return(
        <>
        <div className="employInfo">
            <span>Nome: {name}</span>
            <span>Salario: {salary}</span>
            <span>Cargo: {role}</span>
            <span>Data De Contratação:
             {contract}</span>
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
        <EditModal open={open}>
            <button onClick={()=>{
                if(open == true){
                    setOpen(false)
                }
            }} id="closeModal">X</button>
        </EditModal>
        </>
    )
}
export default EmployeeInfo