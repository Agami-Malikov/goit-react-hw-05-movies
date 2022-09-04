import PropTypes from 'prop-types';

import s from './textField.module.css';

const TextField = ({
  value,
  type,
  name,
  placeholder,
  required,
  autoFocus,
  autoComplete,
  onChange,
}) => {
  return (
    <input
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      className={s.input}
      onChange={onChange}
    />
  );
};

export default TextField;

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  autoFocus: PropTypes.bool.isRequired,
  autoComplete: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
