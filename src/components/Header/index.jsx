import { Container, Wrapper } from "./styles";
import searchLogo from '../../assets/searchLogo.svg'

export function Header() {
  return(
    <Container>
      <Wrapper>
        <div>
            <h1>Codelândia</h1>
            <h3>Blog</h3>
        </div>
          <form>
              <img src={searchLogo} alt="Icone de pesquisa" />
              <input type="text" placeholder="Pesquisar no blog" />
          </form>
      </Wrapper>
    </Container>
  )
}