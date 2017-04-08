import React from 'react';

const TextFieldGroup = ({field, value, label, type, onChange}) => {
    return (
        <div className="form-group">
            <input
                value={value}
                onChange={onChange}
                type={type}
                name={field}
                placeholder={label}
                className="form-control"/>
        </div>
    );
};

export default TextFieldGroup;