import { Box, Button, Icon, Image, Show, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { MdOutlineImage } from 'react-icons/md'
import { useDropzone } from 'react-dropzone'

type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>

function ImageDropzone({
  image,
  setImage,
  setImageFile,
}: {
  image: string
  setImage: (imageProp: string) => void
  setImageFile: (imageFile: File) => void
}) {
  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      setImage(URL.createObjectURL(acceptedFiles[0]))
      setImageFile(acceptedFiles[0])
      // acceptedFiles.forEach((file) => {
      //   const reader = new FileReader()
      //   reader.onabort = () => console.log('file reading was aborted')
      //   reader.onerror = () => console.log('file reading has failed')
      //   reader.onload = () => {
      //     // Do whatever you want with the file contents
      //     const binaryStr = reader.result
      //     console.log(binaryStr)
      //   }
      //   const arrayBuffer = reader.readAsArrayBuffer(file)
      //   console.log('arrayBuffer', arrayBuffer)
      // })
    },
    [setImage, setImageFile]
  )
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  const resetImage = (e: ClickEvent) => {
    e.stopPropagation()
    setImage('')
  }

  return (
    <Stack
      {...getRootProps()}
      sx={{
        width: '22rem',
        height: '18rem',
        borderWidth: 3,
        borderStyle: 'dotted',
        borderColor: 'gray.300',
        borderRadius: 'lg',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
        // Hover
        _hover: {
          bg: 'gray.600',
          transition: 'all 0.2s ease-in-out',
          opacity: 0.8,
        },
      }}
    >
      <Box>
        <input {...getInputProps()} />
        {image !== '' ? (
          <Image
            sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
            alt="your image"
            src={image}
          />
        ) : (
          <Icon sx={{ width: 20, height: 20 }} color="gray" as={MdOutlineImage} />
        )}
      </Box>
      {image ? (
        <Button
          onClick={(e) => resetImage(e)}
          sx={{
            position: 'absolute',
            top: '1px',
            right: '10px',
            zIndex: 1,
            cusror: 'pointer',
          }}
        >
          X
        </Button>
      ) : null}
    </Stack>
  )
}

export default ImageDropzone
