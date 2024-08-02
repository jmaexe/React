import axios, { AxiosResponse } from "axios";
import { Character } from "./Chararcter";

export type CharacterFilters = {
    name? : string;
    age? : number;
}


export interface Card {
    id : string;
    url: string;
    width: number;
    height: number;
    breeds?: [];
    favourite?: {}
}


export const fetchCharacters = async (filters? : CharacterFilters) : Promise<Card[]> => {
    
    await new Promise<Card[]>((resolve) =>  setTimeout(resolve, 1000) )
            const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
    // if(filters?.age) {
    //     data = data.filter(c => c.age === filters.age)
    // }
    // if(filters?.name) { 
    //     data = data.filter(c => c.name === filters.name)
    // }

      return response.data
}