import { useContext } from "react";
import Subject from "./Subject";

export default function Student(){
    
    return(
        <div style={{backgroundColor:"#f4e285",padding:"3px",margin:"8px"}}>
            <h2>Student Component</h2>
            <Subject />
        </div>
    )
}