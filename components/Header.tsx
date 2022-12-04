import { SearchIcon } from '@chakra-ui/icons'
import {
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Link,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { UilShoppingCartAlt } from '@iconscout/react-unicons'

const Explore = () => (
  <NextLink href={'/explore'} legacyBehavior passHref>
    <Link>
      <Text fontSize="xl">Explore</Text>
    </Link>
  </NextLink>
)

const Stats = () => (
  <NextLink href={'/stats'} legacyBehavior passHref>
    <Link>
      <Text fontSize="xl">Stats</Text>
    </Link>
  </NextLink>
)

const ShoppingCart = () => (
  <NextLink href={'/cart'} legacyBehavior passHref>
    <Link>
      <UilShoppingCartAlt />
    </Link>
  </NextLink>
)

const Profile = () => (
  <NextLink href={'/cart'} legacyBehavior passHref>
    <Link>
      <UilShoppingCartAlt />
    </Link>
  </NextLink>
)

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
      <Explore />
      <Stats />
      <ShoppingCart />
    </HStack>
  </HStack>
)
export default Header
