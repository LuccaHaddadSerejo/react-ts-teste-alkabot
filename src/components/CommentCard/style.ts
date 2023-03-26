import styled from 'styled-components';

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 15px;
  border-bottom: 2px solid var(--color-secondary);

  h3 {
    color: var(--color-gray900);
    font-size: var(--font-size4);
    font-weight: var(--weight2);
  }

  span {
    color: var(--color-secondary);
    font-size: var(--font-size6);
    font-weight: var(--weight4);
  }

  p {
    color: var(--color-gray800);
    font-size: var(--font-size5);
    font-weight: var(--weight4);
  }
`;

export { StyledLi };
