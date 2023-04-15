import React from 'react'

const Search = () => {
  return (
    <div className='search-wrapper'>
      <form className="d-flex" role="search">
        <div className="btn btn-outline-success div-search-button">@</div>
        <input className="form-control search-input" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success search-button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search