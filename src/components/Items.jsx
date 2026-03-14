import styles from './Items.module.css'

function Items({ buttonArr }) {

  

  return <>
    {buttonArr.map(item => (
      <button key={item} className={`${styles.item}
      ${item === '*' || item === '/' || item === '+' || item === '-' || item === '='? styles.orange : ''}
      ${item === 'AC' || item === '()' || item === '%'? styles.lightGrey : ''}`}
      onCLick={event => handlingClick(event, item)}>
        {item === '*' ? '×' : item === '-' ? '−' : item === '/' ? '÷': item}</button>
    ))}
  </>
}

export default Items