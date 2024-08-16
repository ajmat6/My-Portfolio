import React from 'react'
import Resume from "../../Assets/PResumeUpdated.pdf"; // importing resume from the assets

// This component is for Download resume button and lets talk button
function CTA() {
  return (
    <div className='cta'>
      {/* To make resume downloadable */}
      <a href= {Resume} download className='btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
