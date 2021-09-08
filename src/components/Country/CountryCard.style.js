import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CountryCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const CountryCardContainer = styled(Link)`
  width: 350px;
  text-decoration: none;
  background-color: ${({ theme }) => theme.headerBgColor};
  color: ${({ theme }) => theme.fontColor};
  margin: 20px;
  transition: 0.3s linear;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;

export const CountryCardImage = styled.div`
  img {
    width: 350px;
    height: 200px;
    object-fit: cover;
  }
`;

export const CountryCardContent = styled.div`
  padding: 15px;

  p {
    margin: 15px 0;
  }
`;
