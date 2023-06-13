import { Grid, GridItem, Stack, Text } from '@chakra-ui/react'
import { Stat } from '../componentTypes'
import ImageBox from './ImageBox'

const stats = [
  {
    key: 'items',
    type: 'number',
    value: 18100,
  },
  {
    key: 'owners',
    type: 'number',
    value: 12800,
  },
  {
    key: 'listed',
    type: 'percent',
    value: 0.9,
  },
  {
    key: 'floor',
    type: 'currency',
    currency: 'eth',
    value: 0.01,
  },
  {
    key: 'volume',
    type: 'currency',
    currency: 'eth',
    value: 528.6,
  },
] as Stat[]
const featureProjects = [
  {
    image: {
      src: '/test.jpeg',
      alt: 'image',
    },
    thumbnail: {
      src: '/test_child.jpeg',
      alt: 'image',
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    title: 'Collection 1',
    stats,
  },
  {
    image: {
      src: '/test.jpeg',
      alt: 'image',
    },
    thumbnail: {
      src: '/test_child.jpeg',
      alt: 'image',
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    title: 'Collection 2',
    stats,
  },
  {
    image: {
      src: '/test.jpeg',
      alt: 'image',
    },
    thumbnail: {
      src: '/test_child.jpeg',
      alt: 'image',
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    title: 'Collection 3',
    stats,
  },
]
function FeaturedProjects() {
  return (
    <Stack sx={{ maxWidth: ['95%', '90%', '73%'] }}>
      <Text sx={{ fontSize: '2xl', fontWeight: 'bold' }}>Featured Projects</Text>
      <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>
        {featureProjects.map((project) => (
          <GridItem key={project.title}>
            <ImageBox
              image={project.image}
              thumbnail={project.thumbnail}
              text={project.text}
              stats={project.stats}
              title={project.title}
            />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  )
}

export default FeaturedProjects
