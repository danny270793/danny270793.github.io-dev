import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Education } from './components/Education'
import { Certifications } from './components/Certifications'
import { OpenSourceLibraries } from './components/OpenSourceLibraries'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { 
  profile, 
  education, 
  certifications, 
  openSourceLibraries, 
  projects, 
  socialNetworks 
} from './data/mockData'

export function App() {
  return (
    <div class="min-h-screen">
      <Navigation />
      
      <main>
        <div id="home">
          <Hero profile={profile} />
        </div>
        
        <div id="education">
          <Education education={education} />
        </div>
        
        <div id="certifications">
          <Certifications certifications={certifications} />
        </div>
        
        <div id="libraries">
          <OpenSourceLibraries libraries={openSourceLibraries} />
        </div>
        
        <div id="projects">
          <Projects projects={projects} />
        </div>
        
        <div id="contact">
          <Contact socialNetworks={socialNetworks} profile={profile} />
        </div>
      </main>
    </div>
  )
}
