import React, { useState } from 'react'
import style from '../styles/search.module.css'

const Search = ({ setSearch }: any) => {
    const [input, setInput] = useState("")

    const handleClick = (e: any) => {
        setSearch(input)
    }
    const handleChange = (e: any) => {
        setInput(e)
    }
    return (
        <>
            <div>
                <input className={style.search} type="text" name="" id="" placeholder='Pokemon' onChange={(e) => handleChange(e.target.value)} /> <button onClick={handleClick}>Search</button>
            </div>
        </>
    )
}

export default Search