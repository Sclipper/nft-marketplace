import { textEllipsis } from '@/app/globalStyles'
import { Box, Divider, Image, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import PriceBox from '../PriceBox'
import { boxAnimation } from './styles'

type NftBoxProps = {
  id: number
  name: string
  image: string
  description: string
  price: string
}

function NftBox({ id, name, image, description, price }: NftBoxProps) {
  const router = useRouter()

  return (
    <Box
      onClick={() => router.push(`/detailed-view/${id}`)}
      as="button"
      type="button"
      sx={boxAnimation}
    >
      <Stack
        borderRadius="lg"
        alignItems="center"
        h="225px"
        sx={{ width: '100%' }}
        overflow="hidden"
      >
        <Image src={image} alt={name} objectFit="cover" />
      </Stack>
      <Stack
        sx={{ width: '100%' }}
        p={3}
        alignItems="start"
        direction="column"
        spacing={2}
      >
        <Text
          sx={{
            textAlign: 'start',
            ...textEllipsis(1),
          }}
          fontSize="md"
          fontWeight="bold"
        >
          {name}
        </Text>
        <Box sx={{ height: '2.8rem', overflow: 'hidden', width: '100%' }}>
          <Text fontSize="sm" textAlign="start" sx={textEllipsis(2)}>
            {description}
          </Text>
        </Box>
      </Stack>
      <Divider />
      <Stack p={2}>
        <PriceBox price={price} currency="eth" />
      </Stack>
    </Box>
  )
}

export default NftBox
