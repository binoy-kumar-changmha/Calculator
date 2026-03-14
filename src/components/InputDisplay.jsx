import styles from './InputDisplay.module.css'

function InputDisplay({ input, handleKeyDown }) {

  return <>
    <input autoFocus type="text" className={styles.inputDisplay} value={input} onKeyDown={handleKeyDown} />
  </>
}

export default InputDisplay