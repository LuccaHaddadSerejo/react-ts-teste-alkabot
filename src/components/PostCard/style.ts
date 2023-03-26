import styled from 'styled-components';
import { CardFadeIn } from '../../styles/animations';

const StyledLi = styled.li`
  display: flex;
  width: 100%;
  min-height: 200px;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border: 2px solid var(--color-primary);
  border-radius: var(--radius2);
  background-color: white;
  box-shadow: 0px 0px 10px 5px #00000040;
  gap: 20px;
  animation: ${CardFadeIn} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media (min-width: 800px) {
    width: 46%;
  }

  @media (min-width: 880px) {
    width: 48.1%;
  }

  @media (min-width: 1670px) {
    width: 49%;
  }

  & > :nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 15px;

    & > :nth-child(1) {
      display: flex;

      h3 {
        color: var(--color-primary);
        font-size: var(--font-size3);
        font-weight: var(--weight1);
      }

      span {
        color: var(--color-secondary);
        transition: 0.8s;
        position: relative;
        left: 10px;

        :hover {
          color: var(--color-primary);
          transform: scale(1.3);
        }
      }
    }

    & > :nth-child(2) {
      h4 {
        color: var(--color-gray900);
        font-size: var(--font-size4);
        font-weight: var(--weight2);
        margin-bottom: 15px;
      }

      p {
        color: var(--color-gray800);
        font-size: var(--font-size5);
        font-weight: var(--weight4);
      }
    }
  }
`;

export { StyledLi };
