import React, { useContext } from 'react'
import ClothesCard from '../Components/ClothesCard'
import { useClothesContext } from '../ClothesContext'

const Home = () => {
  
  const {cards} = useClothesContext()
  
  return (
    <div className='flex justify-center p-4'>
      <div className='bg-blue-gray-500 h-fit shadow-xl rounded-md flex flex-wrap gap-5'>
      {
        cards.map(card => (
          <ClothesCard {...card}/>
        ))
      }
      </div>
    </div>
  )
}

export default Home