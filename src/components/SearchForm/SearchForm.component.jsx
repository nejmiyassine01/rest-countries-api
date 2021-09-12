import React from 'react';
import * as Bs from 'react-icons/bs';
import { FormInput, FormWrapper } from './SearchForm.style';

const SearchForm = ({ search, handleChange, handleSelectChange }) => {
  return (
    <FormWrapper>
      <FormInput>
        <label>
          <Bs.BsSearch />
          <input
            type='text'
            name=''
            placeholder='Look for a country'
            value={search}
            onChange={handleChange}
          />
        </label>
      </FormInput>
      <FormInput>
        <select
          aria-label='Filter Countries By Region'
          handleSelectChange={handleSelectChange}
        >
          <option value='All'>Filter By Region</option>
          <option value='Africa'>Africa</option>
          <option value='Americas'>America</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>
      </FormInput>
    </FormWrapper>
  );
};

export default SearchForm;
