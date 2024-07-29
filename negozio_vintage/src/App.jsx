import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { ClothesContext } from './ClothesContext'
import { Router } from './Router'
import { useState } from 'react'

function App() {
  const router = createBrowserRouter(Router)
  const [cards,setCards] = useState([
    {
      name: "Product 1",
      description: "Description for Product 1",
      price: "10.99",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Product 2",
      description: "Description for Product 2",
      price: "12.99",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Product 3",
      description: "Description for Product 3",
      price: "8.99",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Product 4",
      description: "Description for Product 4",
      price: "15.99",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Product 5",
      description: "Description for Product 5",
      price: "6.99",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Product 6",
      description: "Description for Product 1",
      price: "10.99",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Product 7",
      description: "Description for Product 1",
      price: "10.99",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Product 8",
      description: "Description for Product 1",
      price: "10.99",
      img: "https://via.placeholder.com/150",
    },
  ])
  return (
    <ClothesContext.Provider value={{cards,setCards}}>
       <RouterProvider router={router} />
    </ClothesContext.Provider>
  )
}

export default App
