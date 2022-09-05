import PropTypes from 'prop-types';

import s from './textField.module.css';

const TextField = ({
  type,
  name,
  placeholder,
  required,
  autoFocus,
  autoComplete,
  handleChange,
}) => {
  return (
    <input
      onChange={handleChange}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      className={s.input}
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
};
