import { useState } from "react"
import {Home} from "../home"
import { Projects } from "../projects"

export const Navbar=()=>{

    const [currentPage,setPage]= useState("Home")
    
    return <>
    
        <button onClick={()=>setPage("Home")}>Home</button>
        <button onClick={()=>setPage("Project")}>Games</button>

        {currentPage=="Home" && <Home/>}
        {currentPage=="Project" && <Projects/>}
    </>
}