import React from 'react'
import { Field, reduxForm } from 'redux-form'
import $ from 'jquery'
import {Link}  from 'react-router'

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, categories } = props
  let goToHome = () =>{this.props.router("/")}
  let submitForm = (e) => {
    e.preventDefault();
    let formValues = props.formInfo.values
    console.log(formValues)
    let categories = Object.keys(formValues).map(element => {
      console.log(element, typeof element)
      if(element == "title" || element == "body" || element == "imageUrl"){ return null} 
        else return element;
    }).filter(element => element)
    .map(element=> parseInt(element))
    $.ajax({
      url: '/api/post',
      dataType: 'json',
      type: 'post',
      data:{
        title: formValues.title,
        body: formValues.body,
        image: formValues.image,
        category: categories
      }
    })
  }
  return (
    <form onSubmit={submitForm}>
      <div>
        <label>Title</label>
        <div>
          <Field name="title" component="input" type="text" placeholder="Title"/>
        </div>
      </div>
      <div>
        <label>Body</label>
        <div>
          <Field name="body" component="input" type="text" placeholder="Body"/>
        </div>
      </div>
      <div>
        <label>Image Url</label>
        <div>
          <Field name="imageUrl" component="input" type="text" placeholder="Image Url"/>
        </div>
      </div>   
      <h3>Categories</h3>
      {categories && categories.map((category, index) =>{
        return (
          <div key={index}>
            <label htmlFor={category.category}>{category.category}</label>
            <div>
              <Field name={""+ category.id +""} id={"category" + index} component="input" type="checkbox"/>
            </div>
          </div>
        )
      })
    }
      <div>
        <Link><button type="submit" disabled={pristine || submitting}>Submit</button></Link>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(SimpleForm)