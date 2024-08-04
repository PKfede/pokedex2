import React, { useEffect, useState } from 'react'
import styles from "../styles/cardInfo.module.css";
import styles2 from "../styles/evolutions.module.css";
import Loading from './Loading';
import { PokemonData, PokeSpecies } from '../types/Pokemon';


const Evolution: React.FC<{ pokemon: PokemonData }> = ({ pokemon }) => {

    const [dataEvo, setDataEvo] = useState<string[]>([])
    const [pokeEvo, setPokeEvo] = useState<PokemonData[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [noEvo, setNoEvo] = useState(true)

    const fetchSpecies = async () => {
        const getSpecies = await fetch(pokemon.species.url)
        const data = await getSpecies.json()

        return fetchEvolution(data)
    }

    const fetchEvolution = async (dataSpecies: PokeSpecies) => {

        const getEvolution = await fetch(dataSpecies.evolution_chain.url)
        const data = await getEvolution.json()

        console.log(data);


        return data
    }

    const fetchData = async () => {

        const evoArray = []

        const dataEvolution = await fetchSpecies()
        evoArray.push(dataEvolution.chain.species.name)

        if (dataEvolution.chain.evolves_to.length > 0) {
            if (dataEvolution.chain.evolves_to[0]) {
                evoArray.push(dataEvolution.chain.evolves_to[0].species.name);
            }
            if (dataEvolution.chain.evolves_to[0].evolves_to[0]) {
                evoArray.push(dataEvolution.chain.evolves_to[0].evolves_to[0].species.name);
            }
        } else {
            setNoEvo(true)
        }
        setDataEvo(evoArray);

    }


    const fetchImages = async () => {

        const pokeChainEvo: PokemonData[] = []
        //let promiseArray: any = []

        try {
            const res = await Promise.all(dataEvo.map((val) => fetch(`https://pokeapi.co/api/v2/pokemon/${val}`)));
            const data = await Promise.all(res.map((val) => val.json()))



            data.forEach((val: PokemonData) => {
                pokeChainEvo.push(val)
            })

            setPokeEvo(pokeChainEvo);
            setIsLoading(false)
            // const data = Promise.all(
            //     dataEvo.map(async (val: any) => {

            //         return (await (await fetch(`https://pokeapi.co/api/v2/pokemon/${val}`)).json()).sprites

            //     }))

            // promiseArray = await data

            // promiseArray.map((val: any) => {
            //     pokeChainEvo.push(val)
            // })
        }
        catch (error) {
            console.error(error)
        }

    }


    useEffect(() => {

        if (pokemon.abilities) {
            setIsLoading(true)
            fetchData()
        }
    }, [pokemon])

    useEffect(() => {
        if (dataEvo.length > 0)
            fetchImages()
    }, [dataEvo])

    return (
        <div className={styles2.EvolutionLayout}>
            {/* {
                dataEvo.map((val: string, index: number) => {
                    return <p key={index}> {val}</p>

                })
            } */}
            {
                isLoading ? <Loading /> : (
                    <div>
                        <div className={styles2.EvolutionLayout}>
                            <div>
                                {
                                    pokeEvo.map((val: PokemonData, index: number) => {

                                        return (
                                            <img key={index} className={styles.PokeImg} src={val.sprites.front_default} alt="" />
                                        )
                                    })

                                }
                            </div>
                            <div>
                                {
                                    pokeEvo.map((val: PokemonData, index: number) => {
                                        return (
                                            <img key={index} className={styles.PokeImg} src={val.sprites.front_shiny} alt="" />
                                        )
                                    })

                                }

                            </div>
                        </div>
                    </div>
                )
            }

            {
                noEvo && <h1>No evolutions</h1>
            }
        </div>



    )
}

export default Evolution