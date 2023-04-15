import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { actions } from '../store';

const AboutUs = () => {

  //primary use to keep track of html element
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  // store usage
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  // event handlers
  const increment = () => {
    dispatch(actions.increment())
  }

   const decrement = () => {
    dispatch(actions.decrement())
  }

   const addBy = () => {
    dispatch(actions.addBy(10))
  }

  return (
    <div className='about-wrapper'>
      <div>AboutUs</div>
      <div>
          <input type="text" ref={inputRef} placeholder='User input' />
      </div>
      <div className='counter-block'>
        <h2>Counter</h2>
        <p>{ counter }</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={addBy}>add by 10</button>
      </div>
    </div>
  )
}

export default AboutUs