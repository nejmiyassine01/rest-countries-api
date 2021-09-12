import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AboutCountryWrapper = styled.div`
  padding: 50px;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.headerBgColor};
  padding: 10px;
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  margin: 20px 0;

  svg {
    margin-right: 10px;
  }
`;
