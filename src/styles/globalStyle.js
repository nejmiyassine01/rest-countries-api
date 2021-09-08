import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  backgroundColor: '#F5F5F5',
  fontColor: '#111',
  headerBgColor: '#fff',
  boxShadow: '0 3px 13px 3px rgba(0, 0, 0, .1)',
  hoverTitle: '#555',
};

export const darkTheme = {
  backgroundColor: '#202C37',
  fontColor: '#fff',
  headerBgColor: '#2B3945',
  boxShadow: '0 3px 13px 3px rgba(255, 255, 255, .1)',
  hoverTitle: '#999',
};

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
    z-index: -1;
    transition: .5s linear;
    font-family: 'Montserrat', sans-serif;
  }
`;
