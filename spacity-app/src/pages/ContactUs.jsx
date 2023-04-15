import React, { useRef, useEffect, useState } from 'react'

const ContactUs = () => {

  //useRef: also used to maintain react state
  const inputRef = useRef()
  const idRef = useRef(1)

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const [names, setState] = useState([
    { id: idRef.current ++, name: "John" },
    {id: idRef.current ++, name: "Jane"}
  ])
  // when passing function into nested React component, use react hook called useCallback
  
  const onAddName = () => {
    setState([...names, {
      id: idRef.current++,
      name: inputRef.current.value
    }])
    inputRef.current.value = "";
  }

  return (
    <div className='contact-wrapper'>
      <h1>Contact</h1>
      <div>
        {names.map(name => <div key={name.name}>{ name.id } - {name.name}</div>)}
      </div>
      <input type="text" ref={inputRef} />
      <button onClick={onAddName}>Add Name</button>
    </div>
  )
}

export default ContactUs