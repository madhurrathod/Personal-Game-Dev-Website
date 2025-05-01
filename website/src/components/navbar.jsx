import { useState } from "react"
import {Home} from "../home"
import { Projects } from "../projects"

export const Navbar=()=>{
    const [currentPage,setPage]= useState("Project")
    
    return <>
       <div >
       <button onClick={()=>{
        setPage("Project")
        }}>Games</button>
        <button onClick={()=>{setPage("Home")}}>About</button>
       </div> 

        {currentPage=="Home" && <Home/>}
        {currentPage=="Project" && <Projects/>}
    </>
}