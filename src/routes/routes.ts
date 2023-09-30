

interface routeList {
    id: number;
    to: string;
    name: string;

}

export const routeList: routeList[] = [
    {
        id: 1,
        to: '/arrival-of-goods',
        name: 'Arrival of goods',
    },
    {
        id: 2,
        to: '/groups',
        name: 'Groups',
    },
    {
        id: 3,
        to: '/products',
        name: 'Products',
    },
    {
        id: 4,
        to: '/users',
        name: 'Users',
    },
    {
        id: 5,
        to: '/settings',
        name: 'Settings',
    }
]