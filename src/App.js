import useServiceWorker from 'hooks/useServiceWorker'

import {
  Icon,
  Link,
  Text,
  Stack,
  Image,
  Heading
} from '@chakra-ui/react'

import { AiFillYoutube } from 'react-icons/ai'

import Logo from 'images/logo.svg'
import Dev from 'images/dev.svg'

export default function App () {
  useServiceWorker()

  return (
    <Stack height='100%' justifyContent='center' alignItems='center' spacing='8' color='gray.400'>
      <Image src={Dev} width='300px' alt='Developer' />
      <Stack alignItems='center'>
        <Image src={Logo} width='500px' alt='Codepiercer' />
        <Link href='https://www.youtube.com/channel/UCbCSOBpNa23ppV-_s2Ce_og/featured' isExternal>
          <Icon as={AiFillYoutube} w={8} h={8} color='red' />
        </Link>
      </Stack>
      <Stack alignItems='center'>
        <Heading fontSize='md'>by</Heading>
        <Heading as={Link} isExternal href='https://jana19.dev' fontSize='3xl'>Jana Rajakumar</Heading>
      </Stack>
      <Text fontSize='sm'>Copyright &copy; 2022, CODEPIERCER. All rights reserved.</Text>
    </Stack>
  )
}
