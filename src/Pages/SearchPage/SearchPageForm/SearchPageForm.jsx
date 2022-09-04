import { useState } from 'react';
import fields from './fields';
import s from '../searchPage.module.css';

import TextField from 'shared/components/TextField/TextField';

const SearchPageForm = ({ onSubmit }) => {

  const [state, setState] = useState('');
 
  const handleChange = event => {
    setState(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ ...state });
    setState('');
  };

  

  return (
    <div className={s.box}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.label}>Search</span>
        </button>
        <TextField value={state} onChange={handleChange} {...fields.search} />
      </form>
    </div>
  );
};

export default SearchPageForm;
