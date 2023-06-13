export const imageDropzoneContainer = {
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
}

export const imageDropzoneResetButton = {
  position: 'absolute',
  top: '1px',
  right: '10px',
  zIndex: 1,
  cursor: 'pointer',
}
export const coverImage = {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
}
