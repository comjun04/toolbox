import React from 'react'
import { styled } from './styles/theme'

import ToolListItem from './ToolListItem.jsx'

const testArr = [{
  name: 'A Tool',
  desc: 'Some description about the tool item.'
}]

const renderItem = () => testArr.map((d) => <ToolListItem title={d.name} description={d.desc} />)

const ToolList = () => {
  const List = styled('ul', {
    margin: 0,
    padding: '12px 0',

    backgroundColor: 'lightblue'
  })

  const testRendered = renderItem()

  return (
    <List>
      {testRendered}
    </List>
  )
}

export default ToolList
