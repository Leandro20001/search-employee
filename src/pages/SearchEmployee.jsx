import React from "react"
import ReturnButton from "../components/ReturnButton"
import { useState,useEffect } from "react"
import axios from "axios"
import EmployeeInfo from "../components/EmployeeInfo"






function EditEmployee(){
    const [has,nowHas]= useState(false)

    const [data,setData] = useState()
    const db = (async()=>{
        await axios.get('http://localhost:3333/list').then(res =>{setData(res.data)
    nowHas(true)})
      })
      
      {
        useEffect(()=>{
            db()
            data ?console.log(data):(console.log('Carregando'))
        },[has])
    }
    return(
        <>
        <ReturnButton/>
        <h1>Buscar Funcionario</h1>
        <div id="showEmployee">
            {
             data?(
                
                <>
                {data.map((employ)=> 
                <EmployeeInfo
                key={employ.id}
                name={employ.name}
                salary={employ.salary}
                role={employ.role}
                contract={employ.contract}
                />
                )}
                </>
                    ):(<span>Nenhum usuario</span>)
                }
            </div>
        </>
    )
}
export default EditEmployee