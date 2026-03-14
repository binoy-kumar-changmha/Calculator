import './App.css'
import Calculator from './components/Calculator'
import InputDisplay from './components/InputDisplay'
import OutputDisplay from './components/OutputDisplay'
import Buttons from './components/Buttons'

const App = () => {
  const buttonArr = [
    'AC', '()', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '⌫', '='
  ]

  return <Calculator>
    <InputDisplay></InputDisplay>
    <OutputDisplay></OutputDisplay>
    <Buttons buttonArr={buttonArr} />
  </Calculator>
}

export default App