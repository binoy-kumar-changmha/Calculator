import styles from './Calculator.module.css'

function Calculator({ children }) {
  return <div className={styles.calculator}>{children}</div>
}

export default Calculator