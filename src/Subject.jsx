import { useContext } from "react"
import {subjectContext} from "./ContextData"

export default function Subject(){
    const subject=useContext(subjectContext)
    return(
        <div style={{backgroundColor:"#8cb369",padding:"3px",margin:"8px"}}>
            <h2>Subject is {subject}</h2>
        </div>
    )
}