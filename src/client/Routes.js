import React from 'react';
import Home from './components/pages/Home';
import UsersList from './components/pages/UsersList';

export default [
    {
        path: '/',
        component: Home,
        exact:true
    },
    {
        path: '/users',
        component: UsersList
    }
];