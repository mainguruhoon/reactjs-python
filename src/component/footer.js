import React from 'react'

function footer() {
  return (
    <div className='row bg-primary-subtle p-1'>
        <div className='col-4'>
            <img src='https://w7.pngwing.com/pngs/160/304/png-transparent-flipkart-logo-thumbnail.png' width={120}/>
            <p className='text-dark'>
                this is fake company which is started by fake guru which deals only in fake product
            </p>
        </div>
        <div className='col-4'>
            <h2>Quick Links</h2>
        </div>
        <div className='col-4'>.....</div>
        <div className='text-center bg-secondary p-3'>Copyright @ 2024All Right Reserved by fake company</div>

    </div>
  )
}

export default footer