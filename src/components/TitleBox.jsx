import React from 'react'
import { styled } from './styles/theme'

import ToolList from './ToolList.jsx'

const titleBox = () => {
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
  const Title = styled('h3', {
    fontSize: '30px',
    textAlign: 'center'
  })

  const Text = styled('p', {
    textAlign: 'center'
  })

  return (
    <Header>
      <Center>
        <Title>ToolBox</Title>
        <Text>Tools on the web.</Text>
      </Center>
    </Header>
  )
}

export default titleBox
