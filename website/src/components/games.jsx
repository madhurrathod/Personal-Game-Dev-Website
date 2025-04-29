import { useState } from "react"

export const Games = ()=>{
    const [currentGame, setCurrentGame] = useState("Hidden")
    const [showGame,setShowGame]=useState("")
    
    return (
        <>
        <h1>Current Game: {currentGame}</h1>
        <button onClick={()=>{
            setCurrentGame("Shards of Aether")
            setShowGame(
            <iframe frameborder="0" src="https://itch.io/embed-upload/12200263?color=91d4fd" allowfullscreen="" width="640" height="380"><a href="https://madhurrathod.itch.io/shards-of-aether-webgl-build">Play Shards of Aether on itch.io</a></iframe>
            )
            }}>Shards of Aether</button>

        <button onClick={()=>{
            setCurrentGame("Gravity Shift -Hologram")
            setShowGame(
            <iframe frameborder="0" src="https://itch.io/embed-upload/13535590?color=8bacd5" allowfullscreen="" width="640" height="380"><a href="https://madhurrathod.itch.io/gravity-flip-maze-runner">Play Gravity-Flip-Maze-Runner on itch.io</a></iframe>
            )
            }}>Hard Game</button>

        <button onClick={()=>{
            setCurrentGame("Basic Open World")
            setShowGame(
            <iframe frameborder="0" src="https://itch.io/embed-upload/13180318?color=f8a1e4" allowfullscreen="" width="640" height="380"><a href="https://madhurrathod.itch.io/open-world-in-1-hr">Play Open World in 1hr on itch.io</a></iframe>
            )
            }}>Simple Open World</button>

        <button onClick={()=>{
            setCurrentGame("Parkour Prototype")
            setShowGame(
            <iframe frameborder="0" src="https://itch.io/embed-upload/12912470?color=c0fca1" allowfullscreen="" width="640" height="380"><a href="https://madhurrathod.itch.io/parkour">Play Parkour-Prototype on itch.io</a></iframe>    
            )
            }}>Parkour Prototype</button>

        <a href="https://madhurrathod.itch.io/" target="_blank"><button>Explore More</button></a>


        <div>{showGame}</div>

        <button onClick={()=>{
            setShowGame("")
            setCurrentGame("Hidden")
        }}>Hide Game</button>
        </>

    )


}