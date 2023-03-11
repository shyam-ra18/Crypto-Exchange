import { Box, Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
  return (
    <VStack h="90vh" justifyContent={"center"}>
      <Box transform={"scale(2)"}>
        <Spinner size={"lg"} />
      </Box>
    </VStack>
  )
}

export default Loading