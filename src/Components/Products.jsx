import React from 'react'
// import ball from "../Assets/Images/Nike Mercurial Veer Soccer Bal.jpeg"

const Products = ({Product}) => {
  return (
    <div className="products p-2">
        <div className="img">
            <img className='h-24 w-18' src={Product.pic} alt={Product.name} />
        </div>
        <div className="details">
          <h3 className='font-bold'>{Product.name}</h3>
          <p>Price Rs:{Product.amt}</p>
          <button className='border-2 p-1 rounded bg-slate-500 '>Add to cart</button>
        </div>
    </div>
  )
}

export default Products
