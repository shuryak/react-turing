import React, {useEffect, useState} from 'react'
import '@styles/styles.scss'
import Options from '@/components/Options'
import Tape from '@/components/Tape'
import InstructionsContext from '@/components/Context'

const App = () => {
  const [options, setOptions] = useState({
    instructions: [],
    tapeLength: 20,
    headIndex: 2,
    vars: [1, 2, 3]
  })

  function handleOptionsChanged(options) {
    setOptions(options)
  }

  return (
    <React.StrictMode>
      <InstructionsContext.Provider value={options}>
        <Options onOptionsChanged={handleOptionsChanged}/>
        <Tape/>
      </InstructionsContext.Provider>
    </React.StrictMode>
  )
}

export default App
