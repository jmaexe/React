import Account from './pages/Account'
import Settings from './pages/Settings'
import Root from './pages/Root'
import Home from './pages/Home'
import FormClothes from './pages/FormClothes'
import ListClothes from './Components/ListClothes'
export const Router = [
    {
        path: "/",
        element: <Root/>,
         children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "Home",
                element: <Home/>,
            },
            {
                path: "Settings",
                element: <Settings/>,
            },
            {
                path: "Account",
                element: <Account/>,
            },
            {
                path: "Settings",
                element: <Settings/>,
                children: [
                    {
                        path: "add-clothes",
                        element: <FormClothes/>
                    },
                    {
                        path: "list-clothes",
                        element: <ListClothes/>
                    }
                ]
            },
            
        ]
    }
]