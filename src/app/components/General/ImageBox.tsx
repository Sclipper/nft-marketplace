import { Box, Image, Stack, Text } from '@chakra-ui/react'

type ImageBoxProps = {
  image: {
    src: string
    alt: string
  }
  thumbnail: {
    src: string
    alt: string
  }
  text: string
  title: string
  stats: {
    items: number
    owners: number
    listed: number
    floorPrice: number
  }
}

function ImageBox({ image, thumbnail, text, title, stats }: ImageBoxProps) {
  return (
    <Stack
      sx={{
        transition: 'box-shadow .3s ease-in-out',
        '&:hover': {
          boxShadow: 'xl',
        },
        border: '1px solid black',
        cursor: 'pointer',
      }}
      boxShadow="md"
    >
      <Image sx={{ borderTopRadius: 10 }} src={image.src} alt={image.alt} />

      <Stack direction="row">
        <Image
          sx={{
            borderRadius: 10,
            width: '6rem',
            height: '6rem',
            borderWidth: 2,
            borderColor: 'white',
          }}
          src={thumbnail.src}
          alt={image.alt}
        />
        <Stack sx={{ width: '100%' }}>
          <Text fontWeight="bold" fontSize="xl">
            {title}
          </Text>
          <Text mt={0} fontSize="sm">
            {text}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ImageBox
