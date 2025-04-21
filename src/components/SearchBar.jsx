import { useState } from 'react'
import '../styles/SearchBar.css'

function SearchBar({ onSearch }) {
  const [cityInput, setCityInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (cityInput.trim()) {
      onSearch(cityInput.trim())
    }
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar