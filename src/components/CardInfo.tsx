import React from 'react'

const CardInfo = ({ pokemon }: any) => {
    return (
        <>
            <div>
                <h1>{pokemon.name}</h1>
                <img src={`https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`} alt="" />
            </div>
        </>
    )
}

export default CardInfo