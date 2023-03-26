import styled, { css } from 'styled-components';

interface iStyledButtonProps {
  buttonVariation?: string;
}

const StyledButton = styled.button<iStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: var(--radius3);
  transition: 0.4s;

  ${({ buttonVariation }) => {
    switch (buttonVariation) {
      case 'comment':
        return css`
          width: 100%;
          max-width: 400px;
          height: 40px;
          background-color: var(--color-primary);
          border: 1px solid var(--color-primary);
          border-radius: var(--radius3);
          font-weight: var(--weight3);
          font-size: var(--font-size5);
          color: #ffffff;

          &:hover {
            filter: brightness(1.2);
          }
        `;
      case 'info':
        return css`
          width: 20px;
          height: 20px;
          background-color: transparent;
          border: transparent;
        `;

      case 'closeModal':
        return css`
          height: 20px;
          width: 20px;
          border: 1px solid var(--color-primary);
          background-color: var(--color-primary);
          border-radius: 30%;
          color: #ffffff;
          font-size: var(--font-size5);
          font-weight: var(--weight3);

          &:hover {
            filter: brightness(1.5);
          }
        `;

      case 'openInfoDetail':
        return css`
          border: none;
          background: none;
          background-color: none;
          color: var(--color-secondary);
          font-size: var(--font-size3);
          font-weight: var(--weight3);

          &:hover {
            color: var(--color-primary);
          }
        `;

      case 'scrollBottom':
        return css`
          width: 150px;
          height: 40px;
          background-color: var(--color-secondary);
          border: 1px solid var(--color-secondary);
          border-radius: var(--radius3);
          font-size: var(--font-size5);
          font-weight: var(--weight3);
          color: #ffffff;

          &:hover {
            filter: brightness(1.2);
          }
        `;
      case 'scrollTop':
        return css`
          border: none;
          background: none;
          background-color: none;
          color: var(--color-secondary);
          font-size: var(--font-size3);
          font-weight: var(--weight3);
          &:hover {
            filter: brightness(1.2);
          }
        `;
    }
  }}
`;

export { StyledButton };
