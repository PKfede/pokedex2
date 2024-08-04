import { useEffect, useState } from "react";
import Card from "../components/Card";
import style from "../styles/pokedex.module.css";
import Search from "../components/Search";
import CardInfo from "../components/CardInfo";
import Pagination from "../components/Pagination";
import { PokemonData, PokeName } from "../types/Pokemon";

const Pokedex = () => {
  const [list, setList] = useState([]);
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);


  const fetchAllPokemon = async () => {
    try {
      const fetchData = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${(page - 1) * 5}`
      );
      const data = await fetchData.json();
      setList(data.results);
      setCount(data.count);
      setSearch(data.results[0].name);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchOne = async () => {
    try {
      const fetchData = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search} `
      );
      const data = await fetchData.json();
      setPokemon(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllPokemon();
  }, [page]);

  useEffect(() => {
    fetchOne();
  }, [search]);

  return (
    <>
      <div className={style.layout}>
        <div className={style.list}>
          <Search setSearch={setSearch} setCount={setCount} />
          {list.map((poke: PokeName, index) => {
            const id = poke.url.split("/");

            return (
              <Card
                key={index}
                id={id[id.length - 2]}
                data={poke}
                setSearch={setSearch}
              />
            );
          })}
          {count && <Pagination count={count} page={page} setPage={setPage} />}
        </div>
        {
          pokemon && <CardInfo pokemon={pokemon} />
        }

      </div>
    </>
  );
};

export default Pokedex;
