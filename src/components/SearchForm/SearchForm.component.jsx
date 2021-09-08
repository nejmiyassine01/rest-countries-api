import React from 'react';
import * as Bs from 'react-icons/bs';
import { FormInput, FormWrapper } from './SearchForm.style';

const SearchForm = () => {
  return (
    <FormWrapper>
      <FormInput>
        <label>
          <Bs.BsSearch />
          <input type='text' name='' placeholder='Look for a country' />
        </label>
      </FormInput>
      <FormInput>
        <select>
          <option value='all' default>
            Filter By Region
          </option>
          <option value='Africa' default>
            Africa
          </option>
        </select>
      </FormInput>
    </FormWrapper>
  );
};

export default SearchForm;
