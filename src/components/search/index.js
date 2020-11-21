import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  return (
    <div
      css={`
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
        width: 472px;
        height: 56px;
        display: flex;
        align-items: center;
        overflow: hidden;
        input {
          border: none;
          outline: none;
          flex-grow: 1;
          padding: 18px 10px;
        }
        svg {
          margin-left: 23px;
          fill: #aab8c6;
          width: 20px;
        }
      `}
    >
      <AiOutlineSearch />
      <input type="text" placeholder="Search" />
    </div>
  )
}

export default Search
