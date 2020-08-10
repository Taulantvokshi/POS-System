import React, {useState, useEffect} from 'react'
import {Main, SmallScreen} from './components'

const App = () => {
  const [size, setSize] = useState(window.innerWidth)
  useEffect(
    () => {
      window.addEventListener('resize', () => {
        setSize(window.innerWidth)
      })
    },
    [window.innerWidth]
  )

  return <div>{size < 1108 ? <SmallScreen /> : <Main />}</div>
}

export default App
