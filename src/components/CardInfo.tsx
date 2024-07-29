

const CardInfo = ({ pokemon }: any) => {

    return (
        <>
            <div>
                <h1>{pokemon.name}</h1>

                <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
                {
                    pokemon.types &&
                    <div>
                        {pokemon.types.map((val: any, index: number) => {
                            return <p key={index}>{val.type.name}</p>
                        })}
                    </div>
                }
            </div>
        </>
    )
}

export default CardInfo