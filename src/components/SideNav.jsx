import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from '../styles/theme'

const NavComp = styled('div', {
  height: '100%',
  width: 0,
  position: 'fixed',
  zIndex: 1,
  top: 0,
  left: 0,
  backgroundColor: '#111',
  overflowX: 'hidden',
  paddingTop: '60px',
  transition: '.3s',

  '& a': {
    padding: '8px 8px 8px 32px',
    textDecoration: 'none',
    fontSize: '25px',
    color: '#818181',
    display: 'block',
    transition: '.2s'
  },
  '& a:hover': {
    color: '#f1f1f1',
    backgroundColor: '#666'
  },
  '& a.active': {
    color: '#f1f1f1',
    backgroundColor: '#666'
  }
})

const SideNav = ({ expanded, close }) => {
  const CloseBtn = styled('a', {
    position: 'absolute',
    top: 0,
    right: '25px'
  })

  return (
    <NavComp
      css={{
        width: expanded ? '80%' : 0
      }}
    >
      <CloseBtn onClick={close}>&times;</CloseBtn>
      <NavLink exact to='/' activeClassName='active'>Home</NavLink>
      <NavLink to='/test' activeClassName='active'>Test</NavLink>
    </NavComp>
  )
}

export default SideNav
