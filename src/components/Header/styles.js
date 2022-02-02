import styled from 'styled-components';


export const Container = styled.header`
  background: linear-gradient(to right,#574ae8,#3ea1db);
`;

export const Wrapper = styled.div`
  max-width: 1114px;
  margin: 0 auto;

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--white);

    padding: 15px;
    margin-bottom: 50px;
  }

  form{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    padding-bottom: 30px;
    img{
      position: absolute;
      top: 12px;
      left: 15px;
    }
    input {
      width: 100%;
      padding: 20px 15px 20px 60px;
      background: rgba(255, 255, 255, 0.2);
      border:none;
      color:var(--white);
    }
  }

`;