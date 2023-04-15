import React, { useReducer } from 'react'

const ContactUsForm = (props) => {

    const [state, dispatch] = useReducer((state, action) => ({
        ...state,
        ...action,
    }),
        {
            name: "",
            email: "",
            comment: "",
        });

  return (
      <div className='form-wrapper'>
          { props.isOpen && <form>
              <div className='form-control'>
                  {/* <label htmlFor='name'>Full Name: </label> */}
                  <input
                      type='text'
                      placeholder='Full Name'
                      name='name'
                      value={state.name}
                      onChange={(e) => dispatch({ ...state, name: e.target.value })}
                  />
              </div>
              <div className='form-control'>
                  {/* <label htmlFor='email'>Email: </label> */}
                  <input
                      type='email'
                      placeholder='Email'
                      name='email'
                      value={state.email}
                      onChange={(e) => dispatch({ ...state, email: e.target.value })}
                  />
              </div>
              <div className='form-control'>
                  {/* <label htmlFor='comment'>Comments: </label> */}
                  <textarea
                      placeholder='Comments'
                      name='comment'
                      value={state.comment}
                      onChange={(e) => dispatch({ ...state, comment: e.target.value })}
                  />
              </div>
              <div className='form-control'>
                  <button>Submit</button>
              </div>
          </form>}
    </div>
  )
}

export default ContactUsForm