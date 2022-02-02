import { Container, TextContent, Wrapper } from "./styles";
import heartLogo from '../../assets/heart.svg'

export function Card() {
  return (
    <Container>
      <Wrapper>
        <p>02/02/2022</p>
        <img src={heartLogo} alt="Icone coração" />
      </Wrapper>
      <TextContent>
        <h2>Agora é oficial: Windows 11 está vindo!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vestibulum vestibulum auctor est. Nam vitae finibus ante. 
          Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.</p>
      </TextContent>
     
    </Container>
  );
}