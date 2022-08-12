import React, { useState } from 'react'
import Button from '../../Button/Button'
import './SignUp.css'

function SignUp() {
    const [values,setValues] = useState({
        firstName:'',
        lastName:'',
        email:''
    })

    const [submitted,setSubmitted] = useState(false)
    const [valid,setValid] = useState(false)

    const handleFirstNameInputChange = (event) =>{
        setValues({...values, firstName: event.target.value})
    }
    const handleLastNameInputChange = (event) =>{
        setValues({...values, lastName: event.target.value})
    }
    const handleEmailnputChange = (event) =>{
        setValues({...values, email: event.target.value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(values.firstName && values.lastName && values.email){setValid(true)}
        setSubmitted(true);
    }


  return (
    <>
    <h1 className='form__heading'> Sign up</h1>
    <div className="form-wrapper">
        <div className="form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                {submitted && valid ? <div className="success-message">Success! Thank you for registering</div>: null }
                <input
                onChange={handleFirstNameInputChange}
                value={values.firstName}
                id="first-name"
                className="form-field"
                type="text"
                placeholder="First Name"
                name="firstName"
                />
                {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
                <input
                onChange={handleLastNameInputChange}
                value={values.lastName}
                id="last-name"
                className="form-field"
                type="text"
                placeholder="Last Name"
                name="lastName"
                />
                {submitted && !values.lastName ?<span id="last-name-error">Please enter a last name</span> : null}
                <input
                onChange={handleEmailnputChange}
                value={values.email}
                id="email"
                className="form-field"
                type="text"
                placeholder="Email"
                name="email"
                />
                {submitted && !values.email ?<span id="email-error">Please enter an email address</span>:null}
                <Button buttonSize='btn--wide' buttonColor='blue' >Register</Button>
            </form>
        </div>
    </div>
        
    </>
  )
}

export default SignUp