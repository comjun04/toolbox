import { createStitches } from '@stitches/react'

const {
  styled,
  globalCss
} = createStitches({})

// global css
const defaultCss = globalCss({
  '*': {
    fontFamily: 'Noto Sans KR'
  },
  body: {
    margin: 0,
    padding: 0
  }
})

export {
  styled,
  defaultCss
} 
