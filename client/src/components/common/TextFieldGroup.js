import React from 'react';

const TextFieldGroup = ({field, value, label, type, onChange}) => {
    return (
        <div className="form-group">
            <label className="control-label">{label}</label>
            <input
                value={value}
                onChange={onChange}
                type={type}
                name={field}
                className="form-control"/>
        </div>
    );
};

export default TextFieldGroup;