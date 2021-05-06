import useServiceWorker from 'hooks/useServiceWorker'

import {
  Link,
  Text,
  Stack,
  Image,
  Heading
} from '@chakra-ui/react'

import Logo from 'images/logo.svg'
import Dev from 'images/dev.svg'

export default function App () {
  useServiceWorker()

  return (
    <Stack height='100%' justifyContent='center' alignItems='center' spacing='8' color='gray.500'>
      <Image src={Dev} maxWidth='300px' />
      <Image src={Logo} maxWidth='500px' width='100%' />
      <Stack alignItems='center'>
        <Heading fontSize='md'>by</Heading>
        <Heading as={Link} isExternal href='https://jana19.dev' fontSize='3xl'>Jana Rajakumar</Heading>
      </Stack>
      <Text fontSize='sm'>Copyright &copy; 2022, CODEPIERCER. All rights reserved.</Text>
    </Stack>
  )
}
