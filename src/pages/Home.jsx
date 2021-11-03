import React from 'react'
import { styled } from '../styles/theme'

const MainPage = () => {
  const Header = styled('div', {
    margin: 0,
    padding: '5px 10px',
    height: '30%',
    position: 'relative',

    backgroundColor: 'lightgreen'
  })

  const Center = styled('div', {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  })
  const HeaderTitle = styled('h3', {
    fontSize: '30px',
    textAlign: 'center'
  })

  const HeaderText = styled('p', {
    textAlign: 'center'
  })

  const Body = styled('div', {
    padding: '0 10px'
  })

  return (
    <>
      <Header>
        <Center>
          <HeaderTitle>ToolBox</HeaderTitle>
          <HeaderText>Tools on the web.</HeaderText>
        </Center>
      </Header>
      <Body>
        <p>This is the home page</p>
      </Body>
    </>
  )
}

export default MainPage
