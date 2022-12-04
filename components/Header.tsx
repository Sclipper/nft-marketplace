import { SearchIcon } from '@chakra-ui/icons'
import {
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Link,
  Text,
  Icon,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { TbShoppingCart } from 'react-icons/tb'
import { GiLightningHelix } from 'react-icons/gi'

type HeaderElements = {
  href?: string
  key: 'explore' | 'stats' | 'cart' | 'lightning' | 'profile'
  type: 'text' | 'iconLink' | 'dropdownIcon' | 'profile'
  text?: string
  icon?: JSX.Element
}

const headerElements = [
  {
    href: '/explore',
    key: 'explore',
    text: 'Explore',
    type: 'text',
  },
  {
    href: '/stats',
    key: 'stats',
    text: 'Stats',
    type: 'text',
  },
  {
    href: '/cart',
    key: 'cart',
    text: '',
    icon: <Icon as={TbShoppingCart} />,
    type: 'iconLink',
  },
  {
    text: '',
    key: 'lightning',
    icon: <Icon as={GiLightningHelix} />,
    type: 'dropdownIcon',
  },
  {
    key: 'profile',
    type: 'profile',
  },
] as HeaderElements[]

const HeaderSwitch = (element: typeof headerElements) => {
  const { type, key, name, href } = element
  switch (type) {
    case 'text':
      return (
        <NextLink key={key} href={href} legacyBehavior passHref>
          <Link>
            <Text fontSize="xl">{name}</Text>
          </Link>
        </NextLink>
      )

    default:
      break
  }
}

const Header = () => (
  <HStack
    alignItems="center"
    justifyContent="space-between"
    marginLeft={7}
    marginRight={7}
    marginTop={5}
    spacing={10}
  >
    <Image
      alignSelf="flex-start"
      boxSize="2.5rem"
      borderRadius="full"
      src="/logo.png"
      alt="Site Logo"
    />
    <InputGroup maxW="600" mt="0 !important" borderRadius="full">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.700" />}
      />
      <Input
        borderRadius="full"
        type="text"
        placeholder="Search for collections and accounts"
      />
    </InputGroup>
    <HStack spacing={3}>
      {headerElements.map((element) => HeaderSwitch(element))}

      <NextLink href="/stats" legacyBehavior passHref>
        <Link>
          <Text fontSize="xl">Stats</Text>
        </Link>
      </NextLink>
    </HStack>
  </HStack>
)
export default Header
