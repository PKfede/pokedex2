import { useEffect, useState } from "react";
import Card from "../components/Card";
import style from "../styles/pokedex.module.css";
import Search from "../components/Search";
import CardInfo from "../components/CardInfo";
import Pagination from "../components/Pagination";

const Pokedex = () => {
    const [list, setList] = useState([]);
    const [pokemon, setPokemon] = useState({});
    const [search, setSearch] = useState("pikachu");
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
            setPokemon({ ...data });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchAllPokemon();
    }, [, page]);

    useEffect(() => {
        fetchOne();
    }, [search]);

    return (
        <>
            <div className={style.layout}>
                <div className={style.list}>
                    {list.map((pokemon, index) => {
                        return <Card key={index} data={pokemon} setSearch={setSearch} />;
                    })}
                    {count && <Pagination count={count} page={page} setPage={setPage} />}
                </div>
                <div className={style.info}>
                    <Search setSearch={setSearch} setCount={setCount} />
                    <CardInfo pokemon={pokemon} />
                </div>
            </div>
        </>
    );
};

export default Pokedex;
