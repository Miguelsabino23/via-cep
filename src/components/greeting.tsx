import { FC } from "react"

interface GreetingProps {
    name: string
}

const Greeting: FC<GreetingProps> = ({name}) => {
    return <h1>Seja bem vindo {name}!</h1>
}

export default Greeting