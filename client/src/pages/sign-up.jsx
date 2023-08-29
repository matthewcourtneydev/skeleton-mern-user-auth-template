import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

  let formData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [values, setValues] = useState(formData);
  const [iaPasswordError, setIsPasswordError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function createMember() {
    fetch("/members", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password
        })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate('/')
      })
      .catch(err => {
        setIsEmailError(true)
      })
  }

  function submitRegistration() {
    setIsEmailError(false);
    setIsPasswordError(false)
    if(values.password !== values.confirmPassword) {
        setIsPasswordError(true)
        return console.log("passwords dont match")
    }

    createMember()
  }
  return (
    <div className="page">
      <div id="register-form">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleInputChange}
          id="first-name"
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleInputChange}
          id="last-name"
        />
        <label id="email-input" className={isEmailError ? 'error' : ""} htmlFor="email">{isEmailError ? 'Email Address in Use' : "Email Address"}</label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          id="email"
          className={isEmailError ? 'error-input' : ""}
        />
        <label id="password-input" className={iaPasswordError ? 'error' : ""} htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
          id="password"
          className={iaPasswordError ? 'error-input' : ""}
        />
        <label id="confirm-password-input" className={iaPasswordError ? 'error' : ""} htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={handleInputChange}
          id="confirm-pass"
          className={iaPasswordError ? 'error-input' : ""}
        />
        <button id="submit-registration" onClick={submitRegistration}>
          Register
        </button>

        <h4 id="signup-to-login">Already a Member? <a href="/login">Login</a></h4>
      </div>
    </div>
  );
};

export default SignUp;
