import Items from './Items'

function Buttons({ buttonArr, handlingClick }) {
  return (
    <div>
      <Items buttonArr={buttonArr} handlingClick={handlingClick} />
    </div>
  )
}

export default Buttons