import styled, { css } from 'styled-components';
import { ModalFadeOut, ModalFadeIn } from '../../styles/animations';

interface iStyledModalProps {
  isClosing?: boolean;
}

const StyledModalWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(18, 18, 20, 0.5);
  position: fixed;
  z-index: 1;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModalBox = styled.div<iStyledModalProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  border: 2px solid var(--color-primary);
  border-radius: var(--radius2) var(--radius2);

  @media (min-width: 1024px) {
    position: relative;
    bottom: 100px;
  }

  ${({ isClosing }) => {
    if (isClosing) {
      return css`
        animation: ${ModalFadeOut} 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
          both;
      `;
    } else {
      return css`
        animation: ${ModalFadeIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          forwards;
      `;
    }
  }}

  div {
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-radius: var(--radius2) var(--radius2) 0 0;

    h2 {
      color: var(--color-primary);
      font-size: var(--font-size2);
      font-weight: var(--weight2);
    }
  }

  ul {
    max-height: 400px;
    background-color: #ffffff;
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 21px;
    border-radius: 0 0 var(--radius2) var(--radius2);
  }
`;

export { StyledModalWrapper, StyledModalBox };
export type { iStyledModalProps };
