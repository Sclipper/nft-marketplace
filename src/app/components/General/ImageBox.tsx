import { Image, Stack, Text } from '@chakra-ui/react'
import numeral from 'numeral'
import { FaEthereum } from 'react-icons/fa'
import { Stat } from '../componentTypes'

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
  stats: Stat[]
}

type StatValueTypes = {
  value: Stat['value']
  type: Stat['type']
}

function StatValue({ value, type }: StatValueTypes) {
  switch (type) {
    case 'percent':
      return (
        <Text fontWeight="bold" fontSize="sm">
          {value}%
        </Text>
      )
    case 'currency':
      return (
        <Stack alignItems="center" justifyContent="center" direction="row">
          <FaEthereum />
          <Text fontWeight="bold" fontSize="sm">
            {value}
          </Text>
        </Stack>
      )
    case 'number':
      return (
        <Text fontWeight="bold" fontSize="sm">
          {numeral(value).format('0.0a')}
        </Text>
      )
    default:
      return null
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
        cursor: 'pointer',
      }}
      borderRadius={10}
      pb={3}
      boxShadow="md"
    >
      <Image sx={{ borderTopRadius: 10 }} src={image.src} alt={image.alt} />
      <Stack sx={{ px: 3, maxHeight: 20 }} direction="row">
        <Image
          sx={{
            position: 'relative',
            top: '-2.5rem',
            borderRadius: 10,
            width: '7rem',
            height: '7rem',
            borderWidth: 4,
            borderColor: 'white',
            borderStyle: 'solid',
          }}
          src={thumbnail.src}
          alt={image.alt}
        />
        <Stack sx={{ width: '100%' }}>
          <Text fontWeight="bold" fontSize="lg">
            {title}
          </Text>
          <Text
            sx={{
              mt: '0 !important',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            fontSize="smaller"
          >
            {text}
          </Text>
        </Stack>
      </Stack>
      <Stack sx={{ justifyContent: 'space-between', px: 5 }} direction="row">
        {stats.map((stat) => (
          <Stack sx={{ alignItems: 'center' }} key={stat.key}>
            <StatValue value={stat.value} type={stat.type} />
            <Text mt={0} fontSize="xs">
              {stat.key}
            </Text>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default ImageBox
