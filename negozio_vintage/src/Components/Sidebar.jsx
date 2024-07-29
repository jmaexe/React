import React from 'react'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    PlusIcon,
    InboxIcon,
    BookOpenIcon
} from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const items = [
        {
            name: 'Dashboard',
            icon: <PresentationChartBarIcon className='h-5 w-5' />,
            path: 'Dashboard',

        },
        {
            name: 'E-Commerce',
            icon: <ShoppingBagIcon className='h-5 w-5' />,
            path: 'e-commerce'
       
        },
        {
            name: 'Inbox',
            icon: <InboxIcon className='h-5 w-5' />,
            path: 'inbox'
       
        },
        {
            name: 'Add clothes',
            icon: <PlusIcon className='h-5 w-5' />,
            path: 'add-clothes'
        },
        {
            name: 'List clothes',
            icon: <BookOpenIcon className='h-5 w-5' />,
            path: 'list-clothes'
        }
    ]
    // <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                 
    return (
        <Card className="h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                    Sidebar
                </Typography>
            </div>
            <List>
                {items.map(item => (
                    <ListItem>
                        <ListItemPrefix>
                            {item.icon}
                        </ListItemPrefix>
                        <Link to={`./${item.path}`}>{item.name}</Link>
                    </ListItem>
                ))}
            </List>
        </Card>
    )
}

export default Sidebar