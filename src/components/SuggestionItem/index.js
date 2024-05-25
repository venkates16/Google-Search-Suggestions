// Write your code here
import './index.css'

const Listltem = props => {
  const {obj, searchWord} = props
  const {suggestion, id} = obj

  const click = () => {
    searchWord(suggestion)
  }
  return (
    <li>
      <p>{suggestion}</p>
      <img
        onClick={click}
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="img"
        alt="arrow"
      />
    </li>
  )
}

export default Listltem
