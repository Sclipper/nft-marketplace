import { Box, Button, Icon, Image, Show, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { MdOutlineImage } from 'react-icons/md'
import { useDropzone } from 'react-dropzone'
import {
  coverImage,
  imageDropzoneContainer,
  imageDropzoneResetButton,
} from '../Create.styles'
import { ArrayBufferFile } from '../Create.types'

type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>

function ImageDropzone({
  image,
  setImage,
  setImageFile,
}: {
  image: string
  setImage: (imageProp: string) => void
  setImageFile: (imageFile: ArrayBufferFile) => void
}) {
  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      setImage(URL.createObjectURL(acceptedFiles[0]))
      acceptedFiles.forEach((file) => {
        const reader = new FileReader()
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
          // Do whatever you want with the file contents
          const binaryStr = reader.result
          setImageFile(binaryStr)
        }
        reader.readAsArrayBuffer(file)
      })
    },
    [setImage, setImageFile]
  )

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  const resetImage = (e: ClickEvent) => {
    e.stopPropagation()
    setImage('')
  }

  return (
    <Stack {...getRootProps()} sx={imageDropzoneContainer}>
      <Box>
        <input {...getInputProps()} />
        {image !== '' ? (
          <Image sx={coverImage} alt="your image" src={image} />
        ) : (
          <Icon sx={{ width: 20, height: 20 }} color="gray" as={MdOutlineImage} />
        )}
      </Box>
      {image ? (
        <Button onClick={(e) => resetImage(e)} sx={imageDropzoneResetButton}>
          X
        </Button>
      ) : null}
    </Stack>
  )
}

export default ImageDropzone
