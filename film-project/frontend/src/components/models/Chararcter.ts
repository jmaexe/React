export interface Character {
    id: number,
    name: string,
    description: string,
    modified: string,
    resourceURI: string,
    thumbnail: {path: string, extension: string}
    // imgUrl: string
  }
// export type Character  = {
//   name: string;
//   age: number;
// }