// export default {
//   logIn: '/login',
//   register: '/register',
//   contacts: '/contacts',

import { lazy } from 'react';

// };
export default [
  {
    path: 'goit-react-hw-08-phonebook/login',
    label: 'Login',
    exact: true,
    component: lazy(() => import('./components/logInPage/LogInPage')),
    private: false,
    restricted: true,
  },
  {
    path: 'goit-react-hw-08-phonebook/register',
    label: 'Register',
    exact: true,
    component: lazy(() => import('./components/registerPage/registerPage')),
    private: false,
    restricted: true,
  },
  {
    path: 'goit-react-hw-08-phonebook/contacts',
    label: 'Contacts',
    exact: true,
    component: lazy(() => import('./components/contacts/Contacts')),
    private: true,
    restricted: false,
  },
];
