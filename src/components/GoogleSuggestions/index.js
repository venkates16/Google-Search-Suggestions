// Write your code here
import './index.css'

import {Component} from 'react'
import Listltem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchItem: '',
    word: '',
  }

  click = event => {
    this.setState({searchItem: event.target.value})
  }

  searchWord = props => {
    this.setState({word: props})
  }

  render() {
    const {searchItem, word} = this.state
    console.log(searchItem)
    console.log(word)

    const {suggestionsList} = this.props
    console.log(suggestionsList)

    const newList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchItem.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          className="google"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
        />
        <div className="card">
          <div className="searchBar">
            <img
              src=" https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input type="search" onChange={this.click} value={word} />
          </div>
          <ul>
            {newList.map(each => (
              <Listltem obj={each} key={each.id} searchWord={this.searchWord} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
