import styled from 'styled-components';
import { device } from '../../styles/Breakpoint';

export const FormWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 200px;

  @media ${device.laptop} {
    padding: 50px 100px;
  }

  @media ${device.tablet} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const FormInput = styled.div`
  @media ${device.tablet} {
    margin: 10px 0;
  }

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
