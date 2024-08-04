interface PokeAbility {
    ability: {
        name: string
        url: string
    }
}

interface PokemonTypes {
    slot: number
    type: {
        name: string
        url: string
    }
}

interface PokemonStats {
    base_stat: number
    stat: PokemonStat[]
}

interface PokemonStat {
    name: string
    url: string
}

interface PokemonData {
    abilities: PokeAbility[];
    base_experience: number;
    id: number;
    name: string;
    species: {
        name: string;
        url: string;
    };
    sprites: {
        front_default: string;
        front_shiny: string;
        other: {
            "official-artwork": {
                front_default: string;
                front_shiny: string;
            };
        };
    };
    stats: PokemonStats[]
    types: PokemonTypes[]
    weight: number;
    height: number;
}

interface PokeName {
    name: string;
    url: string;
}

interface PokeSpecies {
    evolution_chain: {
        url: string
    }
}


export { PokemonData, PokeName, PokeSpecies }





