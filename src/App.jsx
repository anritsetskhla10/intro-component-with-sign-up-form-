import { useState } from 'react'

import { GlobalStyles } from './GlobalStyle'
import Header from './components/Header'
import styled from 'styled-components'
import Main from './components/Main'

function App() {

  return (
    <>
      <GlobalStyles/>
      <MainContainer>
              <Header></Header>
              <Main></Main>
      </MainContainer>
     
    </>
  )
}



const MainContainer = styled.div`
   display: flex;
   flex-direction: column;

   @media only screen  and (min-width: 1440px){
    flex-direction: row;
  align-items: center;
  gap: 45px;
   }
`


export default App
