import {
  Input, InputGroup, InputLeftElement, InputRightElement,
} from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'
import { searchBox } from './Header.style'

type HeaderSearchBarSmProps = {

}

function HeaderSearchBarSm() {
  return (

    <InputGroup sx={searchBox}>
      <InputLeftElement pointerEvents="none">
        <BiSearch color="gray.700" />
      </InputLeftElement>
      <Input
        borderRadius="full"
        type="text"
        placeholder="Search for collections and accounts"
      />
      <InputRightElement pointerEvents="none">
        <BiSearch color="gray.700" />
      </InputRightElement>
    </InputGroup>
  )
}

export default HeaderSearchBarSm
