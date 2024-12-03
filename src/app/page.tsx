// app/page.tsx
import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import AboutMe from '../components/AboutMe'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <AboutMe />
        
    </main>
  )
}