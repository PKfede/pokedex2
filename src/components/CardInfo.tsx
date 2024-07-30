import typeLibrary from "../assets/typesImg/assetIndex";
import styles from "../styles/cardInfo.module.css";

const CardInfo = ({ pokemon }: any) => {
  return (
    <>
      <div className={styles.InfoLayout}>
        <h1>{pokemon.name}</h1>

        {pokemon.sprites && (
          <img
            className={styles.PokeImg}
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt=""
          />
        )}

        {pokemon.types && (
          <div>
            {pokemon.types.map((val: any, index: number) => {
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
        <div className={styles.AbilitiesLayout}>
          <h1>Abilities</h1>
          <>
            {pokemon.abilities &&
              pokemon.abilities.map((val: any, index: number) => {
                return (
                  <p key={index} className={styles.Abilities}>
                    {" "}
                    {val.ability.name}
                  </p>
                );
              })}
          </>
        </div>

        <div className={styles.Stats}>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Base experience: {pokemon.base_experience}</p>
        </div>
      </div>
    </>
  );
};

export default CardInfo;
