import styled from 'styled-components'

const MainGrid = styled.main`
  display: grid;
  width: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: 16px;
  .profileArea{
    display: none;
    @media(min-width: 800px){
      display: block;
    }
  }
  @media(min-width: 800px){
    display: grid;
    max-width: 1110px;
    grid-template-areas: "profileArea welcomeArea profileRelationArea";
    grid-template-columns: 160px 1fr 312;
  }
`

export default MainGrid