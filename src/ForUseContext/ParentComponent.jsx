import React, { useState } from 'react';
import ChildComponent from "./ChildComponent";


const ParentComponent = () => {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1 );
  };

  return (
    <div className='box border-2 border-neutral-900 p-3 m-2'>
      <h3 className='font-semibold'>ParentComponent Count:{count}</h3>
      <ChildComponent  handleClick={handleClick}/>
    </div>
  )
}

export default ParentComponent

