import styles from './Buttons.module.css'
import Items from './Items'

function Buttons({ buttonArr, handlingClick }) {
  return (
    <div className = {styles.buttons}>
      <Items buttonArr={buttonArr} handlingClick={handlingClick} />
    </div>
  )
}

export default Buttons