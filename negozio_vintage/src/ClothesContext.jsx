import { createContext,useContext } from "react"
export const ClothesContext = createContext(undefined)


export const useClothesContext = () => {
  const {cards,setCards} = useContext(ClothesContext);
  console.log(cards,setCards)
  if (cards === undefined) {
    throw new Error('Error in useContext');
  }
  return {cards,setCards};
}

