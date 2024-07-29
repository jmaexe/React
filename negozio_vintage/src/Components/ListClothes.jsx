import React, { useContext, useEffect, useState } from 'react'
import { Avatar, Card, List, ListItem, ListItemPrefix, Typography, CardHeader, CardBody, CardFooter, Button } from '@material-tailwind/react'
import { useClothesContext } from '../ClothesContext'
const ListClothes = () => {
    const {cards,setCards} = useClothesContext()
    const [selectedCard, setSelectedCard] = useState(undefined)

    const handleSelectCard = item => {
        setSelectedCard(item)
    }

    return (
        <div className='flex flex-row justify-around w-full'>
            <Card className='overflow-y-scroll max-h-[40rem]'>
                {
                    cards === undefined ?
                        <span className='uppercase font-bold text-lg text-center'>Errore</span>
                        :
                        <List>
                            {cards.map(item =>
                            (
                                <ListItem onClick={() => handleSelectCard(item)}>
                                    <ListItemPrefix>
                                        <Avatar variant='rounded' src={item.img} />
                                    </ListItemPrefix>
                                    <div>
                                        <Typography variant="h6" color="blue-gray">
                                            {item.name} {item.price}
                                        </Typography>
                                        <Typography variant="small" color="gray" className="font-normal">
                                            {item.description}
                                        </Typography>
                                    </div>
                                </ListItem>
                            )
                            )}
                        </List>

                }
            </Card>
            {
                selectedCard !== undefined &&
                    <Card
                        shadow={false}
                        className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                    >
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className={`absolute inset-0 m-0 h-full w-full rounded-none bg-[url('${selectedCard.img}')] bg-cover bg-center`}
                        >
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                        </CardHeader>
                        <CardBody className="relative py-14 px-6 md:px-12">
                            <Typography
                                variant="h2"
                                color="white"
                                className="mb-6 font-medium leading-[1.5]"
                            >
                                {selectedCard.name}
                            </Typography>
                            <Typography variant="h5" className="mb-4 text-gray-400">
                                {selectedCard.description}
                            </Typography>

                        </CardBody>
                    </Card>
                    

                    // <Card className="mt-6 w-96 animate-pulse">
                    //     <CardHeader
                    //         shadow={false}
                    //         floated={false}
                    //         className="relative grid h-56 place-items-center bg-gray-300"
                    //     >
                    //         <svg
                    //             xmlns="http://www.w3.org/2000/svg"
                    //             fill="none"
                    //             viewBox="0 0 24 24"
                    //             strokeWidth={2}
                    //             stroke="currentColor"
                    //             className="h-12 w-12 text-gray-500"
                    //         >
                    //             <path
                    //                 strokeLinecap="round"
                    //                 strokeLinejoin="round"
                    //                 d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    //             />
                    //         </svg>
                    //     </CardHeader>
                    //     <CardBody>
                    //         <Typography
                    //             as="div"
                    //             variant="h1"
                    //             className="mb-4 h-3 w-56 rounded-full bg-gray-300"
                    //         >
                    //             &nbsp;
                    //         </Typography>
                    //         <Typography
                    //             as="div"
                    //             variant="paragraph"
                    //             className="mb-2 h-2 w-full rounded-full bg-gray-300"
                    //         >
                    //             &nbsp;
                    //         </Typography>
                    //         <Typography
                    //             as="div"
                    //             variant="paragraph"
                    //             className="mb-2 h-2 w-full rounded-full bg-gray-300"
                    //         >
                    //             &nbsp;
                    //         </Typography>
                    //         <Typography
                    //             as="div"
                    //             variant="paragraph"
                    //             className="mb-2 h-2 w-full rounded-full bg-gray-300"
                    //         >
                    //             &nbsp;
                    //         </Typography>
                    //         <Typography
                    //             as="div"
                    //             variant="paragraph"
                    //             className="mb-2 h-2 w-full rounded-full bg-gray-300"
                    //         >
                    //             &nbsp;
                    //         </Typography>
                    //     </CardBody>
                    //     <CardFooter className="pt-0">
                    //         <Button
                    //             disabled
                    //             tabIndex={-1}
                    //             className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                    //         >
                    //             &nbsp;
                    //         </Button>
                    //     </CardFooter>
                    // </Card>
            }

        </div>
    )
}

export default ListClothes