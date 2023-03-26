import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 90px;
  margin: 0 auto;
  margin-bottom: 50px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

export const StyledHeader = styled.header`
  width: 90%;
  height: 100%;
  max-width: 1500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  div {
    height: 100%;
    display: flex;
    align-items: center;
    h1 {
      font-weight: var(--weight1);
      font-size: var(--font-size1);
      color: var(--color-primary);
    }
  }

  nav {
    display: flex;
    align-items: center;
  }
`;
