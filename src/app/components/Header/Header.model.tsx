import { AiOutlineShoppingCart } from 'react-icons/ai'
import Profile from '../Profile'
import HeaderSearchBarSm from './HeaderSearchBarSm'

export const menuItems = [
  {
    link: '/create',
    content: 'Create',
  },
  {
    link: '/creator-dashboard',
    content: 'Overview',
  },
  {
    link: '/my-assets',
    content: 'My assets',
  },
  {
    link: '/explore',
    content: 'Explore',
  },
  {
    link: '/stats',
    content: 'Stats',
  },
  {
    link: '/cart',
    content: <AiOutlineShoppingCart />,
  },
  {
    link: '/profile',
    content: <Profile />,
  },
]

export const menuItemsSm = [
  {
    link: null,
    content: <HeaderSearchBarSm />,
  },
  {
    link: '/explore',
    content: 'Explore',
  },
  {
    link: '/stats',
    content: 'Stats',
  },
  {
    link: '/cart',
    content: <AiOutlineShoppingCart />,
  },

]
