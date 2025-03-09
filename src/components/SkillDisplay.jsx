import React from 'react'

function SkillDisplay({url}) {
  return (
    <div className='skill container-fluid d-grid col p-md-5 m-md-4 p-4 m-2 text-center justify-content-center '>
      <img src={url} alt="skill" height="70" className=''/>
    </div>
  )
}

export default SkillDisplay
