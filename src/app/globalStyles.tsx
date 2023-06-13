export const textEllipsis = (maxLines: number) => ({
  display: '-webkit-box',
  WebkitLineClamp: maxLines,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})
