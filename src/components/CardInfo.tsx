import typeLibrary from "../assets/typesImg/assetIndex";
import styles from "../styles/cardInfo.module.css";
import Evolution from "./Evolution";
import { PokemonData } from "../types/Pokemon";


const CardInfo: React.FC<{ pokemon: PokemonData }> = ({ pokemon }) => {
  const stats = ['HP', 'ATK', 'DEF', 'SP-A', 'SP-D', 'SPD']
  return (
    <>
      <div className={styles.InfoLayout}>
        <h1>{pokemon.name}</h1>
        <div className={styles.PokemonGeneral}>
          {pokemon.sprites && (
            <img
              className={styles.PokeImg}
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt=""
            />
          )}

          {pokemon.types && (
            <div>
              {pokemon.types.map((val, index: number) => {
                return (
                  <img
                    key={index}
                    className={styles.typeImg}
                    src={typeLibrary[val.type.name as keyof typeof typeLibrary]}
                    alt=""
                  />
                );
              })}
            </div>
          )}

        </div>

        <div>
          <h1>Abilities</h1>
          <div className={styles.AbilitiesLayout}>
            {pokemon.abilities &&
              pokemon.abilities.map((val, index: number) => {
                return (
                  <p key={index} className={styles.AbilitiesText}>
                    {" "}
                    {val.ability.name}
                  </p>
                );
              })}
          </div>
        </div>



        <div className={styles.Stats}>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Base experience: {pokemon.base_experience}</p>
        </div>
        <h1>stats</h1>
        {pokemon.stats && (
          <div className={styles.AttStats}>
            {pokemon.stats.map((val, index: number) => {
              return <p key={index}> {stats[index]}: {val.base_stat}</p>
            })}
          </div>
        )}
        {
          pokemon.name && <Evolution pokemon={pokemon} />
        }

      </div>
    </>
  );
};

export default CardInfo;
