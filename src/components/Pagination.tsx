import React from 'react'

interface PaginationProps {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FC<PaginationProps> = ({ count, setCount }) => {
    const handleClick = (e: any) => {
        setCount(e.target.value)
    }


    return (
        <div>
            <button>Prev</button>
            {Array.from(Array(count / (count / 5)), (e, i) => {
                return <button value={i} onClick={(event) => handleClick(event)}>{i + 1}</button>
            })}
            <input type="number" name="" id="" />
            <button>next</button>
        </div>
    )
}

export default Pagination