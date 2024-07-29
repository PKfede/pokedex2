import React, { useEffect, useState } from "react"
import styles from "../styles/card.module.css"
import typeLibrary from "../assets/typesImg/assetIndex";
import colorLibrary from "../assets/typesImg/colorIndex";

interface CardProps {
    id: string,
    data: {
        name: string,
        url: string,
    },
    setSearch: React.Dispatch<React.SetStateAction<string>>,
}
const Card: React.FC<CardProps> = ({ data, setSearch, id }) => {

    const [typePoke, setTypePoke] = useState([]);
    const [color, setColor] = useState("")

    const hanleClick = () => {
        setSearch(data.name)
    }

    const fetchOne = async () => {
        try {

            const fetchData = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${data.name} `
            );
            const dataOne = await fetchData.json();

            setColor(colorLibrary[dataOne.types[0].type.name as keyof typeof colorLibrary])
            setTypePoke(dataOne.types)

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchOne();
    }, [data]);
    return (
        <div >
            <button className={styles.Card} style={{ backgroundColor: color }} onClick={hanleClick}>
                <div>
                    <img className={styles.pokeImage} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="" />
                </div>

                <div>
                    <h2>{(data.name)?.toLocaleUpperCase()}</h2>
                </div>

                <div className={styles.TypesLayout} >
                    {
                        typePoke.map((val: any, index) => {
                            return (
                                <img key={index} src={typeLibrary[val.type.name as keyof typeof typeLibrary]} className={styles.PokeTypes} alt="" />
                            )

                        })

                    }
                </div>
            </button>
        </div>


    )
}

export default Card