import React from 'react'

function Form() {
  return (
    <div className='container-fluid text-center w-75 mb-3'>
        <h2>Do you want to message me?</h2><br />
      <form action="" method="post" className=''>
        <input type="text" name="" id=""  className='form-control border-3 m-2' placeholder='Enter Your Name'/>
        <input type="number" name="" id=""  className='form-control border-3 m-2' placeholder='Enter Your Number'/>
        <input type="email" name="" id=""  className='form-control border-3 m-2' placeholder='Enter Your Mail Id'/>
        <textarea name="" id="" cols="30" rows="10"  className='form-control border-3 m-2' placeholder='Message...'></textarea>
        <button className='btn btn-danger m-2'>Sent</button>
      </form>
    </div>
  )
}

export default Form
