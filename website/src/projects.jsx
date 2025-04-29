import { Games } from "./components/games"
export const Projects = ()=>{
    return (
    <>
        <h1>Games made by me</h1>
        <p>Note: Press ESC to close zoomed in view.<br></br>
        It might take some time to load game so wait after clicking button.
       
       <h2>Controls</h2>
        <ul>
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