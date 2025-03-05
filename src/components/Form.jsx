import React from 'react'

function Form() {
  return (
    <div className='container-fluid text-center p-5 m-2'>
        <h2>Do you want to message me?</h2><br />
      <form action="" method="post" className=''>
        <input type="text" name="" id=""  className='form-control border-5' placeholder='Enter Your Name'/>
        <input type="number" name="" id=""  className='form-control border-5' placeholder='Enter Your Number'/>
        <input type="email" name="" id=""  className='form-control border-5' placeholder='Enter Your Mail Id'/>
        <textarea name="" id="" cols="30" rows="10"  className='form-control border-5' placeholder='Message...'></textarea>
        <button className='btn btn-danger'>Sent</button>
      </form>
      <hr />
    </div>
  )
}

export default Form
