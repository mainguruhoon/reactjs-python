import React from 'react'

function CategoyItem({img,name}) {
  return (
    <div className='col-1'>
        <a href='#'>
            <img src={img} width={64}/>
            <p>{name}</p>
        </a>
    </div>
  )
}

export default CategoyItem