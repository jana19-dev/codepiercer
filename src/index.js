import { StrictMode } from 'react'
import { render } from 'react-dom'

import App from 'App'

import { ChakraProvider } from '@chakra-ui/react'

render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
)
