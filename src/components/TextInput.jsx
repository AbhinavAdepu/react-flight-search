import React from 'react';

export const TextInput = ({
    input, placeholder, type, meta: { touched, error }, autoComplete, autoCapitalize,
}) => (
    <div className="">
        <input {...input} placeholder={placeholder} type={type} />
        {touched && error && <span className="form__form-group-error">{error}</span>}
    </div>
);
