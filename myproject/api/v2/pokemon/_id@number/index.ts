import type { DefineMethods } from 'aspida';

type PokemonSprites = {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
    back_default: string;
    back_shiny: string;
    back_female: string;
    back_shiny_female: string;
};

type Pokemon = {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    // abilities: [];
    // forms: [];
    // game_indices: [];
    // held_items: [];
    location_area_encounters: string;
    // moves: [];
    // post_types: [];
    // sprites: {};
    // cries: {};
    species: PokemonSprites;
    // stats: [];
    // types: [];
};

export type Methods = DefineMethods<{
    get: {
        query?: {
            id: number;
        };

        resBody: Pokemon;
    };

    // post: {
    //     reqBody: {};
    //     resBody: {};
    // };
}>;
