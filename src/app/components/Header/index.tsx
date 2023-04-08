import {
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Link,
  IconButton,
  useColorMode,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { BiMoon, BiSearch, BiSun } from 'react-icons/bi'
import { menuItems } from './Header.model'
import { headerContainer, logo, searchBox } from './Header.style'

function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack
      sx={headerContainer}
    >
      <Image
        sx={logo}
        src="/logo.png"
        alt="Site Logo"
      />
      <InputGroup sx={searchBox}>
        <InputLeftElement pointerEvents="none">
          <BiSearch color="gray.700" />
        </InputLeftElement>
        <Input
          borderRadius="full"
          type="text"
          placeholder="Search for collections and accounts"
        />
      </InputGroup>
      <HStack spacing={3}>
        {
          menuItems.map((item) => (
            <NextLink key={item.link} href={item.link} legacyBehavior passHref>
              <Link>
                {item.content}
              </Link>
            </NextLink>
          ))
        }
        <IconButton
          onClick={toggleColorMode}
          isRound
          aria-label="Mode switcher"
          icon={colorMode !== 'light' ? <BiSun /> : <BiMoon />}
        />
      </HStack>
    </HStack>
  )
}
export default Header
