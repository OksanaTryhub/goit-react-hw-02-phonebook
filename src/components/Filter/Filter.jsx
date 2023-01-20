import React from 'react';
// import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);

export default Filter;