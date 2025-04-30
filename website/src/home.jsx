import Madhur from "./assets/madhur_img2.jpeg"
import './projects.css'
import Magnet from "./components/componentFollow"
import TiltedCard from "./components/titleCard/titlecard"

function Home(){
    return (<>


        <h1>About Me</h1>

        <TiltedCard
  imageSrc={Madhur}
  altText="Madhur Rathod"
  captionText="@madhursensei"
  containerHeight="35vh"
  containerWidth="20vw"
  imageHeight="20vw"
  imageWidth="20vw"
  rotateAmplitude={30}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">

    </p>
  }
/>

        {/* <img src={Madhur} /> */}
    
        <p>Myself Madhur Rathod. I am a passionate Gamer and Game Developer.</p>
        <p>I am also doing Competitive Programming.</p>
        <p>Currently a student at Newton School of Technology 2024-28.</p>
        <p>I'm also sharing Game Dev related knowledge on YouTube.</p>
        <p>Game Engine: Unity6 with C#</p>
        <h1>Links</h1>
        <a class="link" href="https://codeforces.com/profile/madhur_rathod" target="_blank"><button>Codeforces</button></a>
        <a class ="link" href="https://github.com/MadhurRathod" target="_blank"><button>GitHub</button></a>
        
            <Magnet padding={400} disabled={false} magnetStrength={5}>
                <a class="link" href="https://www.youtube.com/@MadhurSensei/videos" target="_blank"><button>YouTube Channel</button></a>
            </Magnet>
        
        <a class="link" href="https://www.linkedin.com/in/madhur-rathod-8a5266220/" target="_blank"><button>LinkedIn</button></a>
        <a class="link" href="https://www.instagram.com/madhursensei/" target="_blank"><button>Instagram</button></a>
        
       


    </>)
}
export {Home}