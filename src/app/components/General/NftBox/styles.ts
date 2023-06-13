export const boxAnimation = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '220px',
  boxShadow: 'lg',
  transition: 'transform 0.2s, box-shadow 0.2s',
  _hover: {
    transform: 'scale(1.05)',
    cursor: 'pointer',
    boxShadow: 'lg',
  },
  _active: {
    transform: 'scale(0.95)',
    boxShadow: 'sm',
  },
}
