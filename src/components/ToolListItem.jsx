import React from 'react'

import { styled } from './styles/theme'

const ToolListItem = ({ title, description }) => {
  const ItemBox = styled('li', {
    padding: '4px 16px',

    '&:hover': {
      backgroundColor: 'cyan'
    }
  })
  const ItemTitle = styled('h4', {
    margin: '0 0 3px 0',

    fontSize: '20px'
  })
  const ItemDescription = styled('p', {
    margin: 0
  })

  return (
    <ItemBox>
      <ItemTitle>{title}</ItemTitle>
      <ItemDescription>{description}</ItemDescription>
    </ItemBox>
  )
}

export default ToolListItem
