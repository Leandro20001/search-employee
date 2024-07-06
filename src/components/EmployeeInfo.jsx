import React, { useState } from "react"
import EditModal from "./EditModal"


function EmployeeInfo({name,salary,role,contract}){
    const [open,setOpen] = useState(false)
    return(
        <>
        <div className="employInfo">
            <span>Nome: {name}</span>
            <span>Salario: {salary}</span>
            <span>Cargo: {role}</span>
            <span>Data De Contratação: {contract}</span>
            <button onClick={()=>{
                setOpen(true)
            }} className="editButton">Editar</button>
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