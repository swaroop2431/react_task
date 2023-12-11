import { useState } from "react";
import Update from './Update'


export default function Counter(){
    const [value, updateCounter] = useState(0)

    const increment = ()=>{
        updateCounter(value+1)
    }
    const decrement = ()=>{
        updateCounter(value-1)
    }
    return(
        <>
            <Update increment={increment} decrement={decrement}/>
            <p>{value}</p>
        </>
    )
}