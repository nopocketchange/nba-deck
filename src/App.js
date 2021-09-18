import React from 'react'
import { useSelector } from 'react-redux'
const App = () => {

  const theme = useSelector((state) => state)
  
  console.log(theme)
  return (
    <div>
      
    </div>
  )
}

export default App
