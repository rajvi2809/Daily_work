import { useEffect } from "react";

const Counter=({count,data})=>{

    const handleCounter=()=>{
        console.log("Counter called");
    }

    const handleData=()=>{
        console.log("Data Called")
    }

    useEffect(()=>{
        handleCounter();
    },[])
    
    
    useEffect(()=>{
        handleData();
    },[data])
    
    useEffect(()=>{
        return()=>{
            console.log("Unmount phase")
        }
    },[])

    return(
        <div>
            <h3>Counter {count}</h3>
            <h3>Data {data}</h3>
        </div>
    )
}

export default Counter;