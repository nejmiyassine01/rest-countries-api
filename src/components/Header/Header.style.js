import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.headerBgColor};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const HeaderTitle = styled.h2`
  transition: 0.2s linear;

  &:hover {
    color: ${({ theme }) => theme.hoverTitle};
    cursor: pointer;
  }
`;

export const HeaderToggle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;

  p {
    font-weight: 600;
    margin-left: 5px;
  }
`;
