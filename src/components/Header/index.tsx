import { Button } from '../Button';
import { StyledContainer, StyledHeader } from './style';

const Header = () => {
  const scrollToBottom = (): void => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <div>
          <h1>AlkaBlog</h1>
        </div>
        <nav>
          <Button
            type={'button'}
            buttonVariation={'scrollBottom'}
            onClick={() => scrollToBottom()}>
            Ir para o final
          </Button>
        </nav>
      </StyledHeader>
    </StyledContainer>
  );
};

export default Header;
