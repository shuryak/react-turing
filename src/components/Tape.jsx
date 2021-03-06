import React, {useState, useEffect, useContext} from 'react'
import InstructionsContext from '@/components/Context'

export const Tape = () => {
  const context = useContext(InstructionsContext)

  const [tape, setTape] = useState({
    state: 'q1',
    array: new Array(context.tapeLength).fill('0'),
    iterationsCount: 0,
    isFinished: false,
  })

  const [varsStartIndex, setVarsStartIndex] = useState(context.headIndex)
  const [varsCells, setVarCells] = useState(0)

  function getUpdatedTape() {
    let updatedTape = getNewTape(tape.array, context.tapeLength)
    const headIndex = getHeadIndex(tape.array, context.headIndex)
    const instructions = getInstructionsSet(context.instructions)
    updatedTape = putVars(updatedTape, varsStartIndex, headIndex, context.vars)
    setVarsStartIndex(headIndex)

    return {
      headIndex,
      state: 'q1',
      array: updatedTape,
      iterationsCount: 0,
      isFinished: false,
      instructions
    }
  }

  useEffect(() => {
    setTape(getUpdatedTape())
  }, [])

  useEffect(() => {
    setTape(getUpdatedTape())
  }, [context])

  function getInstructionsSet(instructionsArray) {
    return instructionsArrayTakeApart(instructionsArray)
  }

  function getNewTape(prevTapeArray, tapeLength) {
    const array = prevTapeArray

    if (tapeLength > array.length) {
      const elementsToAddCount = tapeLength - array.length

      for (let i = 0; i < elementsToAddCount; i++) {
        array.push('0')
      }
    } else if (tapeLength < array.length) {
      const elementsToRemoveCount = array.length - tapeLength

      array.splice(-1, elementsToRemoveCount)
    }

    return array
  }

  function getHeadIndex(tapeArray, headIndex) {
    let updatedHeadIndex = headIndex

    if (updatedHeadIndex > tapeArray.length - 1) {
      updatedHeadIndex = tapeArray.length - 1
    }

    return updatedHeadIndex
  }

  function putVars(tapeArray, lastVarsStartIndex, currentVarsStartIndex, vars) {
    let array = tapeArray

    if (currentVarsStartIndex > lastVarsStartIndex) {
      for (let i = 0; i < currentVarsStartIndex; i++) {
        array[lastVarsStartIndex + i] = '0'
      }
    } else if (currentVarsStartIndex < lastVarsStartIndex) {
      for (let i = 0; i < currentVarsStartIndex; i++) {
        array[currentVarsStartIndex + varsCells + i] = '0'
      }
    }

    for (let i = 0; i < varsCells; i++) {
      array[currentVarsStartIndex + i] = '0'
    }

    setVarCells(prevState => {
      let length = vars.length - 1;
      for (let i = 0; i < vars.length; i++) {
        length += vars[i] + 1
      }

      return length
    })

    for (let i = 0; i < vars.length; i++) {
      for (let j = 0; j <= vars[i]; j++) {
        array[currentVarsStartIndex + j] = '1'

        if (j === vars[i]) {
          currentVarsStartIndex += j + 2
        }
      }
    }

    return array
  }

  function step() {
    if (tape.isFinished) return

    const key = `${tape.state}|${tape.array[tape.headIndex]}`

    if (!tape.instructions.has(key)) return

    let {newState, newValue, direction} = tape.instructions.get(key)

    setTape(prevState => {
      let headIndex = prevState.headIndex
      let array = [...prevState.array]

      array[headIndex] = newValue

      if (direction === 'R') {
        headIndex++
      } else if (direction === 'L') {
        headIndex--
      }

      if (array[headIndex] === undefined) {
        array[headIndex] = '0'
      }

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
        array
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

  function handleCellClick(element, idx) {
    const newElement = element === '0' ? '1' : '0';

    setTape(prevState => {
      const array = [...prevState.array]
      array[idx] = newElement

      return {
        ...prevState,
        array
      }
    })
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
              <td key={idx} onClick={() => handleCellClick(element, idx)}>{element}</td>
            )}
          </tr>
        </tbody>
      </table>
      <button style={{zoom: 3}} onClick={step}>?????????????? ??????</button>
      <button style={{zoom: 2}} onClick={() => setTape(getUpdatedTape())}>????????????????????????</button>
    </div>
  )
}

export default Tape
