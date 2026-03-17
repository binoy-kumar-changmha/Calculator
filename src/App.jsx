import { useState, useRef } from 'react'
import './App.css'
import Calculator from './components/Calculator'
import InputDisplay from './components/InputDisplay'
import OutputDisplay from './components/OutputDisplay'
import Buttons from './components/Buttons'

const App = () => {
  const buttonArr = [
    'AC', '(', ')', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '⌫', '='
  ]

  const [output, setOutput] = useState("o_o")
  const [input, setInput] = useState("")
  const inputRef = useRef(null)
  const caretRef = useRef(null)
  const nextCaret = useRef(null)  // ← moved here from InputDisplay

  function handlingClick(event, item, caret) {
    const safeCaret = caret ?? caretRef.current ?? input.length

    if (item === "AC") {
      setOutput("o_o")
      setInput("")
    }
    else if (item === "⌫") {
      if (safeCaret === 0) return
      setInput(prev => prev.slice(0, safeCaret - 1) + prev.slice(safeCaret))
      nextCaret.current = safeCaret - 1  // ← restore caret after delete
    }
    else if (item === "*") {
      setInput(prev => prev.slice(0, safeCaret) + '×' + prev.slice(safeCaret))
      nextCaret.current = safeCaret + 1
    }
    else if (item === "=") {
      try {
        const expression = input.replace(/×/g, "*").replace(/÷/g, "/")
        setOutput(eval(expression))
      } catch {
        setOutput("error")
      }
    }
    else {
      setInput(prev => prev.slice(0, safeCaret) + item + prev.slice(safeCaret))
      nextCaret.current = safeCaret + 1  // ← restore caret after insert
    }
  }

  function handleKeyboard(e) {
    const key = e.key
    if (key === 'Enter' || key === '=') handlingClick(null, '=')
    else if (key === 'Escape') handlingClick(null, 'AC')
  }

  return <Calculator>
    <InputDisplay caretRef={caretRef} nextCaret={nextCaret} input={input} handleKeyboard={handleKeyboard} setInput={setInput} inputRef={inputRef} />
    <OutputDisplay output={output} />
    <Buttons buttonArr={buttonArr} handlingClick={handlingClick} />
  </Calculator>
}

export default App