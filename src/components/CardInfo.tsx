
const CardInfo = ({ pokemon }: any) => {
    return (
        <>
            <div>
                <h1>{pokemon.name}</h1>
                <img src={`https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`} alt="" />
                {
                    pokemon.types &&
                    <div key={pokemon.id}>
                        {pokemon.types.map((val: any) => {
                            return <p key={pokemon.id}>{val.type.name}</p>
                        })}
                    </div>
                }
            </div>
        </>
    )
}

export default CardInfo