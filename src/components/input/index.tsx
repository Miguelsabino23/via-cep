import { ChangeEventHandler, FC } from "react"
import { Container } from "./styles"

interface InputProps {
    label: string
    name: string
    state: string
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement>
    errorMsg: string
    type: "text" | "email"
}

const Input: FC<InputProps> = (props) => {
    return <Container>
    <label htmlFor={props.name}>{props.label}</label>    
    <div>
    <input type={props.type} name={props.name} id={props.name} value={props.state} placeholder={props.placeholder} onChange={props.onChange}/>
    <span>{props.errorMsg}</span>
    </div>
    </Container>
}

export default Input