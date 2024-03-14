import React, { useContext } from 'react'
import { GrandContext } from './GrandParentComponent';

const ChildComponent = ({handleClick}) => {
  const value = useContext(GrandContext);
  
  return (
    <div className='box border-2 border-neutral-900 p-3 m-2'>
      <h3>ChildComponent</h3>
      <p className='text-red-500'>{value}</p>
      <button type="button" onClick={handleClick} className='border border-black p-1 rounded-md bg-gray-500 text-slate-50'>Click Me</button>
    </div>
  )
}

export default ChildComponent;

