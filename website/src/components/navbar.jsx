import { useState } from "react"
import {Home} from "../home"
import { Project } from "../project"

export const Navbar=()=>{

    const [currentPage,setPage]= useState("Home")
    
    return <>
    
        <button onClick={()=>setPage("Home")}>Home</button>
        <button onClick={()=>setPage("Project")}>Project</button>

        {currentPage=="Home" && <Home/>}
        {currentPage=="Project" && <Project/>}
    </>
}