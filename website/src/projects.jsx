import { Games } from "./components/games"
import "./projects.css"
import Magnet from "./components/componentFollow"

export const Projects = ()=>{
    return (
    <>

    <div>
        <Magnet padding={50} disabled={false} magnetStrength={50}>
                <h1>Games made by me</h1>
        </Magnet>
    </div>

    
        <p>Note: Select Games from Below to play. <br />Press ESC to close zoomed in view.<br></br>
        It might take some time to load game so wait after clicking button.
    <div>
        <Magnet padding={50} disabled={false} magnetStrength={50}>
                <h2>Controls</h2>
        </Magnet>
    </div>
        <ul class="list-decimal list-inside ">
        Some controls for some games, use logic to decide.
            <li>Keys: WASD (forward, left, back, right)</li>
            <li>Player-Jump: Space</li>
            <li>Fast-Move: Shift + Keys</li>
            <li>Arrow-keys: Hologram</li>
            <li>Mouse: Player/Camera Direction</li>
        </ul>
        

        </p>
        <Games />
        
    </>
    )
}