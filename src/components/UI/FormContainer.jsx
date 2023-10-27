import React from 'react'
import './FormContainer.css'

const FormContainer = (props) => {
  return (
    <div className='form-container'>
      {props.children}
    </div>
  )
}

export default FormContainer
