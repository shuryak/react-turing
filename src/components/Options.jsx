import React, {useEffect, useState} from 'react'

export const Options = ({onOptionsChanged}) => {
  const [options, setOptions] = useState(getDefaultOptions)

  const [code, setCode] = useState('')

  useEffect(() => {
    onOptionsChanged(options)
  }, [])

  useEffect(() => {
    onOptionsChanged(options)
  }, [options])

  function getDefaultOptions() {
    return {
      instructions: [],
      tapeLength: 10,
      headStartIndex: 2
    }
  }

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
      return {...prevState, headStartIndex: +event.target.value - 1}
    })
  }

  function handleTapeLengthChange(event) {
    setOptions(prevState => {
      return {...prevState, tapeLength: +event.target.value}
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

      <label><p>Начальное положение головки:</p>
        <input
          type="number"
          name="head-start-index-input"
          id="head-start-index-input"
          min={1}
          max={options.tapeLength}
          onChange={handleHeadStartIndexChange}
          defaultValue={options.headStartIndex}
        />
      </label>

      <label><p>Длина ленты:</p>
        <input
          type="number"
          name="tape-length-input"
          id="tape-length-input"
          min={1}
          onChange={handleTapeLengthChange}
          defaultValue={options.tapeLength}
        />
      </label>
    </div>
  )
}

export default Options
