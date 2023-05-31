import { Navigation } from 'components/Navigation';
import { Container, Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <Navigation />
      </Container>
    </Header>
  );
};
