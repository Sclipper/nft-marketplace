import { AiOutlineShoppingCart } from 'react-icons/ai'
import Profile from '../Profile'
import HeaderSearchBarSm from './HeaderSearchBarSm'

export const menuItems = [
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
    link: '/',
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
