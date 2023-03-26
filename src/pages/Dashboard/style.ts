import styled from 'styled-components';

const StyledMain = styled.main`
  width: 100%;
  padding-bottom: 40px;

  & > div {
    & > :nth-child(2) {
      position: fixed;
      bottom: 15px;
      right: 25px;
      z-index: 2;
      span {
        z-index: 2;
        height: 15px;
        width: 15px;

        & > :hover {
          transition: 0.4s;
          color: var(--color-primary);
        }
      }
    }
  }

  section {
    width: 90%;
    height: 100%;
    max-width: 1500px;
    margin: 0 auto;
    ul {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 30px;

      @media (min-width: 800px) {
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
  }
`;

export { StyledMain };
