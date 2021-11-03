import React from 'react'
import { styled } from '../styles/theme'

const TopBar = ({ openSidenav }) => {
  const Bar = styled('div', {
    height: '50px',

    backgroundColor: 'lightblue'
  })

  const SidenavOpenBtn = styled('button', {
    height: '100%',
    marginRight: 5,
    padding: '0 16px',

    backgroundColor: 'white',
    border: '1px solid black'
  })

  return (
    <Bar>
      <SidenavOpenBtn onClick={openSidenav}>●</SidenavOpenBtn>
      <span>(Page Title)</span>
    </Bar>
  )
}

export default TopBar
