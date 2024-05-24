// Write your code here
import './index.css'

import Listltem from '../Suggestionltem'

import {Component} from 'react'

class GoogleSuggestions extends Component {
  state = {
    searchItem: '',
  }

  render() {
    let {searchItem} = this.state
    let {suggestionsList} = this.props
    console.log(suggestionsList)

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
            <input type="search" />
          </div>
          <ul>
            {suggestionsList.map(each => {
              return <Listltem obj={each} />
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
