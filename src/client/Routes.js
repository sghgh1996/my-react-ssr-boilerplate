import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

/**
 * This component return arrays. The is like this because we use it in matchRoutes.
 */
export default [
  {
    ...HomePage,
    path: '/',
    exact:true
  },
  {
    ...UsersListPage,
    path: '/users',
  }
];