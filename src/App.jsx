import React, {useState} from 'react'
import '@styles/styles.scss'
import Options from '@/components/Options'
import Tape from '@/components/Tape'
import InstructionsContext from '@/components/Context'

const App = () => {
  const [options, setOptions] = useState({
    instructions: [],
    tapeLength: 4,
    headStartIndex: 2
  })

  function handleOptionsChanged(options) {
    setOptions(options)
  }

  return (
    <React.StrictMode>
      <Options onOptionsChanged={handleOptionsChanged}/>
      <InstructionsContext.Provider value={options}>
        <Tape/>
      </InstructionsContext.Provider>
    </React.StrictMode>
  )
}

export default App
