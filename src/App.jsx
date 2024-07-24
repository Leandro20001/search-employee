import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"
import { useEffect,useState } from "react"
import AddSucess from "./components/AddSucess"
import AddError from "./components/AddError"


function App(){
  const [created,setCreated] = useState(false)
  const [error,setError] = useState(false)

  const navigate = useNavigate()
  const db = (async()=>{
    await axios.get('http://localhost:3333/list').then(res =>{
      console.log(res.data)
    })
  })

  const [createdAt,setCreatedAt] = useState('')

  


  const [form,setForm] = useState({
    name:'',
    salary:0,
    role:'',
    contract:createdAt
  })

  const sendForm = async (event)=>{
    event.preventDefault()
    const date  = new Date()
    const newDate =date.getDate()+'-'+(date.getMonth()+1)+'-'+ date.getFullYear()
    console.log(newDate)
    setForm({...form,contract:newDate})
    const send = async()=>{
      await axios.post('http://localhost:3333/novo%20funcionario',form,{headers:{'Content-Type':'application/json','method':'post'}}).then(console.log('req'))
    }
    if(form.name !== null && form.name.length>2){
      send()
      setCreated(true)
    } else setError(true)
  }
  useEffect(()=>{
      console.log('Form Renderizado')
  },[form])
  return(
    <>
    <div id="title">
      <img id="logo" src="src/midia/logo.png" alt="" />
      <span>Employee Manager</span>
    </div>

      <header>
        <nav id="navLinks">

          <a
          onClick={()=>navigate('/funcionarios')}
          >Meus Funcionarios</a>
        </nav>
      </header>
      
     <h1>Adicione Seu Funcionario</h1>
     <div className="eAdd">
      <form action=".">
        <input
          onClick={()=>{
            setCreated(false)
          }}
          onChange={(e)=>{
            setForm({...form,name:e.target.value})
          }}
         type="text" 
         placeholder="Nome Completo..."
         name="nome"
         required={true}
         />
        <input 
        onChange={(e)=>{
          setForm({...form,salary:e.target.value})
        }}
        
        type="text"
        placeholder="Salario"
        name="salary"
        required={true}
        />
        <select 
        onChange={(e)=>{
          setForm({...form,role:e.target.value})
        }}
        name="cargo" 
        id="cargo">
          <option value="null">Selecione o Cargo</option>
          <option value="Estagiario">Estagiario</option>
          <option value="Junior">Junior</option>
          <option value="Pleno">Pleno</option>
          <option value="Senior">Senior</option>

        </select>

        <button onClick={sendForm} className="submitBtn">Adicionar</button>
      </form>
     </div>
     {created &&
     <AddSucess/>
     }
     {error == true && created !==true?
     <AddError/>:null}
    </>
  )
}
export default App