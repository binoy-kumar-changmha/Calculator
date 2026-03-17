import styles from './Buttons.module.css'
import Items from './Items'

function Buttons({ buttonArr, handlingClick }) {
  return (
    <div className = {styles.Buttons}>
      <Items buttonArr={buttonArr} handlingClick={handlingClick} />
    </div>
  )
}

export default Buttons