import React from 'react'
import fast from '../fast.png'
import secure from '../secure.png'
import easy from '../easy.png'

function Home() {
  return (
    <div>
      <div className='my-5'>
        <div className='text-center'>
          <h1 className='text-primary display-3'>Your main<br />developer <br />utilities <br />repository</h1>
          <p className='fs-3 text-secondary my-4'>Fast, reliable, and easy! <strong className='text-primary fw-semibold '>Text-Utility</strong> Brings<br />several free online tools to assist developers in<br /> daily tasks.</p>
        </div>
      </div>
      <div className='row text-center' style={{marginTop:'70px'}}>
        <div className='col-md-4'>
          <img style={{ width: '90px', height: '90px' }} src={fast} />
          <p className='fs-5 fw-semibold '>Fast</p>
        </div>
        <div className='col-md-4'>
          <img style={{ width: '75px', height: '75px' }} src={secure} />
          <p className='fs-5 fw-semibold '>Secure</p>
        </div>
        <div className='col-md-4'>
          <img style={{ width: '80px', height: '80px' }} src={easy} />
          <p className='fs-5 fw-semibold '>Easy</p>
        </div>
      </div>
      <div className='container fs-4 text-secondary' style={{marginTop:'150px'}}>
        <p className='fs-3'>About Text-Utility.com</p><hr/>
        <p className='fs-4 w-75 p-3  lh-sm'>
          <strong className='fw-semibold'>Text-Utility.com</strong> is one of the most powerful, secure and free websites containg various tools for helping with your daily task such as online case converter, Remove extra spaces, Reverse String and text counter, extract text and much more.<strong className='fw-semibold'>Enjoy all for free!!</strong>
        </p>
      </div>
    </div>
  )
}

export default Home