import { useNavigate } from "react-router-dom"
import React from "react"
function ReturnButton(){
    const navigate = useNavigate()
    return(
        <>
        <button onClick={()=>{
            navigate('/')
        }} id="returnButton">Voltar</button>
        </>
        
    )

}
export default ReturnButton