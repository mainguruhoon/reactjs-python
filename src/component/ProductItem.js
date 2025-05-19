import React from 'react'

function ProductItem({p,price,img}) {
  return (
    <div className='col-2 bg-warning m-2'>
        <img src={img} width={120}/>
        <h5>{p}</h5>
        <p>{price}</p>
    </div>
  )
}

export default ProductItem;