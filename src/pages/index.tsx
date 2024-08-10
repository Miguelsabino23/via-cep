import Greeting from "@/components/greeting"
import { ChangeEventHandler, FormEventHandler, MouseEventHandler, useEffect, useState } from "react"
import { FormContainer } from "./styles"
import Input from "@/components/input"

const defaultValue = {
        name: "",
        cep: "",
        email: "",
        celular: ""
}

const configErrorMsg = {
    name: "Nome muito curto",
    cep: "Cep inválido",
    email: "Email incorreto",
    celular: "Celular incorreto"
}


const Home = () => {

    const [errorMsg, setErrorMsg] = useState(defaultValue)
    const [state, setState] = useState(defaultValue)
    

   useEffect(()=>{
    const localData = localStorage.getItem('payload')

    if(localData) setState(JSON.parse(localData))
    
   },[])

    const handleChange:ChangeEventHandler<HTMLInputElement> = (ev) => {
        const {value, name} = ev.target
        setState(prev => ({
            ...prev, 
            [name]: value
        }))
    }

    const handleSubmit:FormEventHandler<HTMLFormElement> = (ev) => {
        ev.preventDefault()

        if (state.name.length <= 2) {
            setErrorMsg(prev => ({
                ...prev,
                name: configErrorMsg.name
                
            }))
            return
        }
        if (!state.email.includes("@")) {
            setErrorMsg(prev => ({
                ...prev,
                email: configErrorMsg.email
            }))
            return
        }
        if (state.cep.length !== 8) {
            setErrorMsg(prev => ({
                ...prev,
                cep: configErrorMsg.cep
            }))
            return
        }
        if (state.celular.length !== 9) {
            setErrorMsg(prev => ({
                ...prev,
                celular: configErrorMsg.celular
            }))
            return
        }

        setErrorMsg(defaultValue)
        
        const data = JSON.stringify(state)
        
        localStorage.setItem("payload", data)
    }

    const configInput = [
        {
            label: "Nome",
            name: "name",
            state: state.name,
            placeholder: "Digite seu nome",
            onChange: handleChange,
            errorMsg: errorMsg.name,
            type: "text" as "text" | "email", 
        },
        {
            label: "Email",
            name: "email",
            state: state.email,
            placeholder: "Digite seu email",
            onChange: handleChange,
            errorMsg: errorMsg.email,
            type: "text" as "text" | "email", 
        },
        {
            label: "Cep",
            name: "cep",
            state: state.cep,
            placeholder: "Digite seu cep",
            onChange: handleChange,
            errorMsg: errorMsg.cep,
            type: "text" as "text" | "email", 
        },
        {
            label: "Celular",
            name: "celular",
            state: state.celular,
            placeholder: "Digite seu Celular",
            onChange: handleChange,
            errorMsg: errorMsg.celular,
            type: "text" as "text" | "email", 
        },
    ]

    return (
        <FormContainer onSubmit={handleSubmit}>
            {configInput.map(input => (
                <Input key={input.label} {...input}/>
            ))}
            <button type="submit">Enviar</button>
        </FormContainer>
    )
}

export default Home