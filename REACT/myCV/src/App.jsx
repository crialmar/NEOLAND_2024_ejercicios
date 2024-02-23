import { useState } from 'react'
import './App.css'
import { CV } from './CV/Cv'
import { About, Education, Experience, Hero, More } from './components'



//!------> DESTRUCTURING DE CV PARA PODER ACCEDER A SUS CLAVES
//?------> podremos pasemos estas claves por prop
const { hero, education, experience, languages, habilities, volunteer } = CV

const App = () => {
  const [showEducation, setShowEducation] = useState(true)

  return (
    <>
      <div className= "App">
        <Hero hero={hero} />
        <About hero={hero} />
        <button 
          className="btn education"
          onClick={()=> setShowEducation(true)}
        >
          <Education education={education} />
        </button>
        <button 
          className="btn experience"
          onClick={()=> setShowEducation(true)}
        >
          <Experience experience={experience} />
        </button>
        <More 
          languages={languages} 
          habilities={habilities} 
          volunteer={volunteer} 
        />
        <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
        </div>
      </div>
      
    </>
  )
}

export default App
