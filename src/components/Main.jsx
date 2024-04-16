import React, { useState } from 'react';
import { FormStyle } from "../styledComponents/FormStyle";
import { OfferContainer } from "../styledComponents/OfferStyle";

import Input from './Input';

function Main() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let newErrors = { firstName: '', lastName: '', email: '', password: '' };
  
    if (!formData.firstName) {
      newErrors.firstName = 'First Name cannot be empty';
      valid = false;
    }
    if (!formData.lastName) {
      newErrors.lastName = 'Last Name cannot be empty';
      valid = false;
    }
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = 'Looks like this is not an email';
      valid = false;
    }
    if (!formData.password) {
      newErrors.password = 'Password cannot be empty';
      valid = false;
    }
  
    setErrors(newErrors);
  
    if (valid) {
      setFormData({ firstName: '', lastName: '', email: '', password: '' }); 
    }
  };

  return (
    <div>
      <OfferContainer>
        <p>
          Try it free 7 days <span>then <br />$20/mo. thereafter</span>
        </p>
      </OfferContainer>

      <FormStyle onSubmit={handleSubmit}>
                <Input type="text" name="firstName" placeholder="First Name" 
                value={formData.firstName} onChange={handleChange} error={errors.firstName} />

                <Input type="text" name="lastName" placeholder="Last Name" 
                value={formData.lastName} onChange={handleChange} error={errors.lastName} />

                <Input type="" name="email" placeholder="Email Address" 
                value={formData.email} onChange={handleChange} error={errors.email} />

                <Input type="password" name="password" placeholder="Password" 
                value={formData.password} onChange={handleChange} error={errors.password} />
                
                <button type="submit">CLAIM YOUR FREE TRIAL</button>
                <p>
                    By clicking the button, you are agreeing to our <span>Terms and Services</span>
                </p>
            </FormStyle>
    </div>
  );
}

export default Main;
