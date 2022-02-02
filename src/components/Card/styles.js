import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background-color:var(--white);
`;

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  color: var(--gray);
  font-size:12px;
`;

export const TextContent = styled.article`
  padding: 1rem 3rem;
  h2,p{
    margin-bottom: 1rem;
  }

`;