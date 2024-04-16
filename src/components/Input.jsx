
import React from 'react';

import { InputStyle  } from '../styledComponents/InputStyle';

import ErrorImage from '/images/icon-error.svg';

function Input({ name, type, placeholder, value, onChange, error }) {

    

    return (
        <div className='inputContainer'>
            <InputStyle
                $error = {error}
                type={type}
                name={name}
                placeholder={error ? "" : placeholder}
                value={value}
                onChange={onChange}
                autoComplete={type === "email" ? "off" : undefined}
            />
            {error && <img className='errorImg' src={ErrorImage} alt="error icon" />}
            {error && <p className='errorText'>{error}</p>}
        </div>
    );
}

export default Input;
