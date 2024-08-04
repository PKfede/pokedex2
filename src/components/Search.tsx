import React, { useState } from 'react'
import style from '../styles/search.module.css'

const Search = ({ setSearch }: any) => {
    const [input, setInput] = useState("")

    const handleClick = () => {

        setSearch(input)
    }
    const handleChange = (e: string) => {
        setInput(e)
    }
    return (
        <>
            <div className={style.SearchBarLayout}>
                <input className={style.search} type="text" name="" id="" placeholder='Pokemon' onChange={(e) => handleChange(e.target.value)} /> <button className={style.SearchButton} onClick={handleClick}>Search</button>
            </div>
        </>
    )
}

export default Search