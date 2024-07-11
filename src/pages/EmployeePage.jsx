import axios from "axios"
import {useNavigate} from "react-router-dom"
import React from "react"
import { useEffect, useState } from "react"
import EmployeeInfo from "../components/EmployeeInfo"
import ReturnButton from "../components/ReturnButton"



function EmployeePage(){
    const [has,nowHas]= useState(false)

    const [data,setData] = useState()
    const db = (async()=>{
        await axios.get('http://localhost:3333/list').then(res =>{setData(res.data)
    nowHas(true)})
      })
      
      {
        useEffect(()=>{
            db()
            data ?null:(console.log('Carregando'))
        },[has])
    }
    const navigate = useNavigate()
    const [modal,setModal] = useState(false)


    return(  
    <>
    <ReturnButton/>
    <h1>Seus Funcionarios</h1>
    <button onClick={()=> navigate('/')} className="addEmployee">Adicionar Funcionario</button>
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
export default EmployeePage