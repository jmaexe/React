import { Character } from "./Chararcter";

export type CharacterFilters = {
    name? : string;
    age? : number;
}

export const fetchCharacters = (filters? : CharacterFilters) : Character[] => {
    let filteredCharacters = [
        { name: 'Luca', age: 2 },
        { name: 'Giulia', age: 3 },
        { name: 'Marco', age: 2 },
        { name: 'Sara', age: 2 },
        { name: 'Francesco', age: 5 },
        { name: 'Anna', age: 1 },
        { name: 'Alessandro', age: 1 },
        { name: 'Martina', age: 4 },
        { name: 'Matteo', age: 3 },
        { name: 'Elena', age: 5 }, ]
    
    if(filters?.age) {
        filteredCharacters = filteredCharacters.filter(c => c.age === filters.age)
    }
    if(filters?.name) { 
        filteredCharacters = filteredCharacters.filter(c => c.name === filters.name)
    }
      return filteredCharacters
}