import * as React from 'react'
import { Stack, Text } from '@chakra-ui/react'

type FormEntryProps = {
  title: string
  subtitle?: string
  input: React.ReactNode | JSX.Element
}

function FormEntry({ title, subtitle, input }: FormEntryProps) {
  return (
    <Stack spacing={2}>
      <Text fontSize="md" fontWeight="bold">
        {title}
      </Text>
      {subtitle ? (
        <Text fontWeight="bold" color="gray.500" fontSize="xs">
          {subtitle}
        </Text>
      ) : null}
      {input}
    </Stack>
  )
}

export default FormEntry
