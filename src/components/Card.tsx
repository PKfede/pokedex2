import React, { SetStateAction } from "react"
import styles from "../styles/card.module.css"

interface CardProps {
    data: {
        name: string,
        url: string,
    },
    setSearch: React.Dispatch<React.SetStateAction<string>>,
}
const Card: React.FC<CardProps> = ({ data, setSearch }) => {
    const hanleClick = () => {
        setSearch(data.name)
    }
    return (
        <button onClick={hanleClick}>
            <div className={styles.Card}>
                <img className={styles.pokeImage} src={`https://projectpokemon.org/images/normal-sprite/${data.name}.gif`} alt="" />
                <h1>{(data.name)?.toLocaleUpperCase()}</h1>
            </div>
        </button>

    )
}

export default Card