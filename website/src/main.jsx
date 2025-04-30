import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Navbar } from './components/navbar'
import ClickSpark from './clickSpark'
import Lightning from './components/lightning/lightning'


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Lightning
    hue={0}
    xOffset={-0.5}
    speed={1}
    intensity={1}
    size={3}
  />
  <ClickSpark
  sparkColor='white'
  sparkSize={35}
  sparkRadius={35}
  sparkCount={24}
  duration={400}
>
    <Navbar />
</ClickSpark>

  </StrictMode>,
)
