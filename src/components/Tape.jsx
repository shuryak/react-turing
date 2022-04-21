import React, {useState, useEffect, useContext} from 'react'
import InstructionsContext from '@/components/Context'

export const Tape = () => {
  const context = useContext(InstructionsContext)

  const [tape, setTape] = useState(getDefaultTape())

  function getDefaultTape() {
    return {
      headIndex: context.headStartIndex,
      state: 'q1',
      array: new Array(context.tapeLength).fill('0'),
      iterationsCount: 0,
      isFinished: false,
      instructions: instructionsArrayTakeApart(context.instructions)
    }
  }

  useEffect(() => {
    setTape(prevState =>
    {
      return {
        ...tape,
        headIndex: context.headStartIndex,
        instructions: instructionsArrayTakeApart(context.instructions)}
    })
  }, [context])

  function step() {
    if (tape.isFinished) return

    const key = `${tape.state}|${tape.array[tape.headIndex]}`

    if (!tape.instructions.has(key)) return

    let {newState, newValue, direction} = tape.instructions.get(key)

    setTape(prevState => {
      let headIndex = prevState.headIndex

      if (direction === 'R') {
        headIndex++
      } else if (direction === 'L') {
        headIndex--
      }

      if (tape.array[headIndex] === undefined) {
        tape.array[headIndex] = '0'
      }

      let updatedArray = prevState.array
      updatedArray[prevState.headIndex] = newValue

      let iterationsCount = prevState.iterationsCount + 1;
      let isFinished = false

      if (newState === 'q0') {
        console.log('Finished!')
        isFinished = true
      }

      return {
        ...prevState,
        state: newState,
        headIndex,
        iterationsCount,
        isFinished,
        updatedArray
      }
    })
  }

  function instructionsArrayTakeApart(array) {
    let result = new Map()

    array.forEach(element => {
      const right = element.substr(element.indexOf('->'), element.length).slice(2).trim()
      const direction = right[right.length - 1]
      const newValue = right.substr(0, right.length - 1).trim()[right.substr(0, right.length - 1).trim().length - 1]
      const newState = right.split(' ').join('').substr(0, right.split(' ').join('').indexOf(newValue + direction))

      const left = element.substr(0, element.indexOf('->')).trim()
      const value = left[left.length - 1]
      const state = left.substr(0, left.length - 1).trim()

      result.set(`${state}|${value}`, { newState, newValue, direction})
    })

    return result
  }

  return (
    <div className="tape">
      <table>
        <tbody>
          <tr className="tape-state">
            {tape.array.map((element, idx) => {
              if (idx === tape.headIndex) {
                return (
                  <th key={idx}>{tape.state}</th>
                )
              }
              return <th key={idx}></th>
            })}
          </tr>
          <tr className="tape-values">
            {tape.array.map((element, idx) =>
              <td key={idx}>{element}</td>
            )}
          </tr>
        </tbody>
      </table>
      <button style={{zoom: 3}} onClick={step}>STEP</button>
      <button style={{zoom: 2}} onClick={() => setTape(getDefaultTape())}>To default</button>
    </div>
  )
}

export default Tape
