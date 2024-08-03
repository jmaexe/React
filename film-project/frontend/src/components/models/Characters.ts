import axios, { AxiosResponse } from "axios";
import { Character } from "./Chararcter";
import { Comics } from "./Comics";
// export type CharacterFilters = {
//     name? : string;
//     age? : number;
// }
export interface CharacterFilters {
    limit: number;
    comics?:string;
    events?:string;
    series?:string;
    stories?:string;

}

export interface Card {
    id : string;
    url: string;
    width: number;
    height: number;
    breeds?: [];
    favourite?: {}
}

export const fetchEvents = async (): Promise<Comics[]> => {
    await new Promise((resolve) =>  setTimeout(resolve, 1000) )
    const response = await axios.get(`${import.meta.env.VITE_base_url}/events`);
    console.log(response,response.data)

    return response.data;
 }
 export const fetchSeries = async (): Promise<any> => {
    await new Promise((resolve) =>  setTimeout(resolve, 1000) )
    const response = await axios.get(`${import.meta.env.VITE_base_url}/series`);
    console.log(response.data)
    return response.data;
 }
 export const fetchStories = async (): Promise<any> => {
    await new Promise((resolve) =>  setTimeout(resolve, 1000) )
    const response = await axios.get(`${import.meta.env.VITE_base_url}/stories`);
    console.log(response.data)
    return response.data;
 }
 
export const fetchComics = async (): Promise<Comics[]> => {
    await new Promise((resolve) =>  setTimeout(resolve, 1000) )
    const response = await axios.get(`${import.meta.env.VITE_base_url}/comics`);
    console.log(response.data)
    return response.data;
 }

export const fetchCharacters = async (filters : CharacterFilters) : Promise<Character[]> => {
    
    await new Promise((resolve) =>  setTimeout(resolve, 1000) )
            // const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
    const response = await axios.get(`${import.meta.env.VITE_base_url}/characters/limit=${filters.limit}`);
    console.log(response.data)
            // if(filters?.age) {
    //     data = data.filter(c => c.age === filters.age)
    // }
    // if(filters?.name) { 
    //     data = data.filter(c => c.name === filters.name)
    // }

      return response.data
}