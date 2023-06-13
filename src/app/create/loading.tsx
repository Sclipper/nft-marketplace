'use client'

import {
  Box,
  Button,
  Image,
  Input,
  Skeleton,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import FormEntry from './components/FormEntry'
import { imageDropzoneContainer } from './Create.styles'

function CreateLoading() {
  return (
    <Stack sx={{ mt: 8, alignItems: 'center' }}>
      <Stack sx={{ maxWidth: '48%' }} spacing={12}>
        <Stack spacing={5}>
          <Skeleton>
            <Text alignSelf="center" fontSize="4xl" fontWeight="bold">
              Create New NFT
            </Text>
          </Skeleton>
          <Stack direction="row" spacing={1}>
            <Skeleton>
              <Text color="red.500" fontSize="md">
                *
              </Text>
              <Text fontSize="sm">Required fields</Text>
            </Skeleton>
          </Stack>
          <Stack spacing={5}>
            <Skeleton>
              <FormEntry
                title="Image, Video, Audio, or 3D Model *"
                subtitle="File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB"
                input={
                  <Stack sx={imageDropzoneContainer}>
                    <Box>
                      <Image
                        sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        alt="your image"
                        src=""
                      />
                    </Box>
                  </Stack>
                }
              />
            </Skeleton>
            <Skeleton>
              <FormEntry title="Name *" input={<Input placeholder="Item name" />} />
            </Skeleton>
            <Skeleton>
              <FormEntry
                title="Description"
                subtitle="The description will be included on the item's detail page underneath its image. Markdown syntax is supported."
                input={
                  <Textarea placeholder="Provide a detailed description of your item" />
                }
              />
            </Skeleton>
            <Skeleton>
              <FormEntry title="Price *" input={<Input placeholder="Item Price" />} />
            </Skeleton>
          </Stack>
        </Stack>
        <Skeleton>
          <Button
            sx={{ alignSelf: 'baseline' }}
            colorScheme="teal"
            variant="solid"
            type="submit"
            size="lg"
          >
            Create And Sell
          </Button>
        </Skeleton>
      </Stack>
    </Stack>
  )
}

export default CreateLoading
