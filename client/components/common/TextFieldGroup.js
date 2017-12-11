import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, type, onChange }) => {
    return (
        <div className={classnames("field", { 'error': error })}>
            <label>{label}</label>
            <input
                onChange={onChange} 
                value={value}
                type={type}
                name={field} 
                placeholder={label} 
            />
            {error && <p style={{color: "#9f3a38", fontSize: "12px"}}>{error}</p>}
        </div>
    );
}

TextFieldGroup.propTypes = {

    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired

}

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;