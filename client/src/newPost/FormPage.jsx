import React from 'react'
import Form from './Form'

const FormPage = props => {
  return (
    <div>
      <Form formInfo={props.form} categories={props.categories}/>
    </div>
  )
}

export default FormPage