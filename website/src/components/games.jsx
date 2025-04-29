import { useState } from "react"

export const Games = ()=>{
    const [gameOne,sestGameOne] = useState(false)
    const [currentGame, setCurrentGame] = useState("")
    const change = ()=>{
        
        setCurrentGame(gameOne?<iframe frameborder="0" 
        src="https://itch.io/embed-upload/12912470?color=c0fca1" 
        allowfullscreen="" width="640" height="380">
        <a href="https://madhurrathod.itch.io/parkour">Play Parkour-Prototype on itch.io</a>
        </iframe>:"")
    }
    
    return (
        <>
        <h1>{gameOne}</h1>
        {currentGame}
        <button onClick={()=>{{
            sestGameOne(!gameOne)
            change()
            }}}>{gameOne?"Show First":"Hide First"}</button>
        </>

    )


}