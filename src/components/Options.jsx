import React, {useContext, useEffect, useState} from 'react'
import InstructionsContext from '@/components/Context'

export const Options = ({onOptionsChanged}) => {
  const context = useContext(InstructionsContext)

  const [options, setOptions] = useState(context)

  const [code, setCode] = useState('')

  useEffect(() => {
    onOptionsChanged(options)
  }, [])

  useEffect(() => {
    onOptionsChanged(options)
  }, [options])

  function handleFileChange(event) {
    const file = event.target.files[0]

    const reader = new FileReader()
    reader.readAsText(file, 'UTF-8')

    reader.onload = readerEvent => {
      setCode(readerEvent.target.result)

      setOptions(prevState => {
        return {...prevState, instructions: readerEvent.target.result.split('\n')}
      })
    }
  }

  function handleTextAreaChange(event) {
    setCode(event.target.value)

    setOptions(prevState => {
      return {...prevState, instructions: event.target.value.split('\n')}
    })
  }

  function handleHeadStartIndexChange(event) {
    setOptions(prevState => {
      return {...prevState, headIndex: +event.target.value - 1}
    })
  }

  function handleTapeLengthChange(event) {
    setOptions(prevState => {
      return {...prevState, tapeLength: +event.target.value}
    })
  }

  function handleVarChange(event, index) {
    setOptions(prevState => {
      const vars = [...prevState.vars]
      vars[index] = +event.target.value

      return {
        ...prevState,
        vars
      }
    })
  }

  return (
    <div className="codes-input">
      <textarea
        name="codes-textarea"
        id="codes-textarea"
        onChange={handleTextAreaChange}
        value={code}
      >
      </textarea>
      <label className="file-input-label">Выбрать файл
        <input
          className="file-input"
          type="file"
          name="file-input"
          id="file-input"
          onChange={handleFileChange}
        />
      </label>

      <label><p>Положение головки:</p>
        <input
          type="number"
          name="head-start-index-input"
          id="head-start-index-input"
          min={1}
          max={options.tapeLength}
          onChange={handleHeadStartIndexChange}
          defaultValue={options.headIndex}
        />
      </label>

      <label><p>Длина ленты:</p>
        <input
          type="number"
          name="tape-length-input"
          id="tape-length-input"
          min={1}
          onChange={handleTapeLengthChange}
          value={options.tapeLength}
        />
      </label>

      <label><p>Переменные:</p>
        {options.vars.map((variable, idx) => {
          return (
            <input
              className="var-inout"
              type="number"
              name={'var' + idx}
              id={'var' + idx}
              min={0}
              value={variable}
              key={idx}
              onChange={e => handleVarChange(e, idx)}
            />
          )
        })}
      </label>
    </div>
  )
}

export default Options
