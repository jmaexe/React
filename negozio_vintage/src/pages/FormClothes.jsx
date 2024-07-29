import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import React, { useState, useReducer } from 'react'
import { useClothesContext } from "../ClothesContext";

const formReducer = (state, action) => {
  switch (action.type) {
    case 'add_clothes': return {
      ...state
    }
    case 'set_field': return {
      ...state,
      [action.field]: action.value,
    }
    default: return state
  }
}

const FormClothes = () => {
  const { cards, setCards } = useClothesContext()
  const [card, dispatchCard] = useReducer(formReducer, { name: '',price:0, description: '', image: '' });
  const handleCard = (field, value) => {
    dispatchCard({ type: 'set_field', field, value })
  }
  console.log(cards)
  const handleSubmit = e => {
    e.preventDefault();
    dispatchCard({ type: 'add_clothes' })
    setCards(prevCards => [...prevCards, card]);
  }
  return (
   <>
    <Card className="w-full max-w-[28rem]">
      <CardHeader
        color="gray"
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center px-4 py-8 text-center">
        <Typography variant="h5" color="white">
          New Clothes
        </Typography>
      </CardHeader>
      <CardBody>
        <form className="mt-12 flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="my-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Name
            </Typography>
            <Input
              type="text"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="name"
              onChange={e => handleCard(e.target.name, e.target.value)}
              value={card.name}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Price
            </Typography>
            <Input
              type="number"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="price"
              onChange={e => handleCard(e.target.name, e.target.value)}
              value={card.price == 0 ? '' : card.price}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Description
            </Typography>
            <Input
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="description"
              onChange={e => handleCard(e.target.name, e.target.value)}
              value={card.description}
              containerProps={{ className: "mt-4" }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Image
            </Typography>
            <Input
              type="file"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 block w-full text-sm text-slate-500
              file:mr-4 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold hover:file:bg-blue-gray-100"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="image"
              onChange={e => handleCard(e.target.name, e.target.value)}
              value={card.image}
            />
          </div>
          <Button size="lg" type="submit">Add new clothes</Button>
        </form>
      </CardBody>
    </Card>
    <div>{cards.map(item => <p>{item.name}</p>)}</div>
   </>
  );
}
export default FormClothes