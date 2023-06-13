import { Stack, Text } from '@chakra-ui/react'
import { FaEthereum } from 'react-icons/fa'

type PriceBoxProps = {
  price: string | number
  currency: 'eth'
}

const getCurrencyIcon = (currency: 'eth') => {
  switch (currency) {
    case 'eth':
      return <FaEthereum />
    default:
      return ''
  }
}
function PriceBox({ price, currency }: PriceBoxProps) {
  return (
    <Stack
      sx={{
        width: '100%',
        justifyContent: 'start',
      }}
      spacing={0}
      direction="row"
      alignItems="center"
    >
      <Text fontSize="xs">Price</Text>
      {getCurrencyIcon(currency)}
      <Text fontSize="xs" fontWeight="bold">
        {price}
      </Text>
    </Stack>
  )
}

export default PriceBox
