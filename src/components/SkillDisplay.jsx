import React from 'react'

function SkillDisplay({url}) {
  return (
    <div className='container-fluid d-grid col p-4 m-4 text-center justify-content-center'>
      <img src={url} alt="skill" height="70" className=''/>
    </div>
  )
}

export default SkillDisplay
