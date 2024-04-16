

import styled from 'styled-components';

const HeaderStyle = styled.header`
  width: 32.7rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1.6rem;
  margin-bottom: 6.4rem;

  h1{
    font-size: 2.8rem;
    font-weight: bold;
    line-height: 1.29;
    letter-spacing: -0.029rem;
    color: #fff;
  }

  p{
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.63;
    color: #fff;
  }

  @media only screen and (min-width:1440px) {
    width: 52.5rem;
    gap: 1.1rem;
    text-align: left;
    margin: 0;

    h1{
    font-size: 50px;
    line-height: 1.1;
    letter-spacing: -0.52px;
    color: #fff;
  }
  } 



`


export { HeaderStyle };
