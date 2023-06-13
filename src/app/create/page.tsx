'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'

import { Button, Input, Stack, Text, Textarea, useToast } from '@chakra-ui/react'
import FormEntry from './components/FormEntry'
import ImageDropzone from './components/ImageDropzone'
import { createItem } from './CreateController'
import { ArrayBufferFile } from './Create.types'

function CreatePage() {
  const toast = useToast()
  const router = useRouter()
  const [imageFile, setImageFile] = React.useState<ArrayBufferFile>()
  const [formState, setFormState] = React.useState({
    image: '',
    name: '',
    description: '',
    price: '',
  })
  const handleFormState = (item: keyof typeof formState, value: string) => {
    setFormState({ ...formState, [item]: value })
  }

  const handleCreateItem = async () => {
    const transaction = await createItem({ formInput: formState, file: imageFile! })
    if (!transaction) {
      toast({
        title: 'Your transaction failed',
        description: 'Check if you provided enough gas in your wallet',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'Your item has been created',
        description: 'Check it out in your inventory',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })

      router.push('/')
    }
  }

  return (
    <Stack sx={{ mt: 8, alignItems: 'center' }}>
      <Stack sx={{ maxWidth: '48%' }} spacing={12}>
        <Stack spacing={5}>
          <Text alignSelf="center" fontSize="4xl" fontWeight="bold">
            Create New NFT
          </Text>
          <Stack direction="row" spacing={1}>
            <Text color="red.500" fontSize="md">
              *
            </Text>
            <Text fontSize="sm">Required fields</Text>
          </Stack>
          <Stack spacing={5}>
            <FormEntry
              title="Image, Video, Audio, or 3D Model *"
              subtitle="File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB"
              input={
                <ImageDropzone
                  image={formState.image}
                  setImage={(value) => handleFormState('image', value)}
                  setImageFile={setImageFile}
                />
              }
            />
            <FormEntry
              title="Name *"
              input={
                <Input
                  onChange={(e) => handleFormState('name', e.target.value)}
                  placeholder="Item name"
                />
              }
            />
            <FormEntry
              title="Description"
              subtitle="The description will be included on the item's detail page underneath its image. Markdown syntax is supported."
              input={
                <Textarea
                  onChange={(e) => handleFormState('description', e.target.value)}
                  placeholder="Provide a detailed description of your item"
                />
              }
            />
            <FormEntry
              title="Price *"
              input={
                <Input
                  onChange={(e) => handleFormState('price', e.target.value)}
                  placeholder="Item Price"
                />
              }
            />
          </Stack>
        </Stack>
        <Button
          isDisabled={
            !formState.image || !formState.name || !formState.price || !imageFile
          }
          onClick={handleCreateItem}
          sx={{ alignSelf: 'baseline' }}
          colorScheme="teal"
          variant="solid"
          type="submit"
          size="lg"
        >
          Create And Sell
        </Button>
      </Stack>
    </Stack>
  )
}

export default CreatePage
