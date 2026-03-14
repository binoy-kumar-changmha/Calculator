import styles from './InputDisplay.module.css'

function InputDisplay() {
  return <>
    <input autoFocus type="text" className={styles.inputDisplay}/>
  </>
}

export default InputDisplay