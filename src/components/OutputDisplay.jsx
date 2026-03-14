import styles from './OutputDisplay.module.css'

function OutputDisplay({output}) {
  return <div className={styles.outputDisplay}>{output}</div>
}

export default OutputDisplay