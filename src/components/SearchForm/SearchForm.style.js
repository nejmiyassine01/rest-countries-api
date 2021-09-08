import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 200px;
`;

export const FormInput = styled.div`
  svg,
  label,
  select,
  input,
  input::placeholder {
    color: ${({ theme }) => theme.fontColor};
    border: none;
    background-color: ${({ theme }) => theme.headerBgColor};
  }

  label,
  select {
    padding: 15px 10px;
  }

  input {
    padding: 10px 20px;
    font-size: 18px;
    outline: none;
  }
`;
