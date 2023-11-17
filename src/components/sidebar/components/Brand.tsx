// Chakra imports
import { Flex, useColorModeValue, Heading } from '@chakra-ui/react';

// Custom components
import { HSeparator } from 'components/separator/Separator';
import Image from 'next/image';

export function SidebarBrand() {
  //   Chakra color mode
  const logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex alignItems='center' flexDirection='column'>
      <Flex alignItems={'center'} columnGap='5px'>
        <Image
          priority
          src={'/img/layout/logo.svg'}
          height={50}
          width={50}
          color={logoColor}
          alt='logo'
        />

        <Heading as='h1' size='lg' color={logoColor}>
          Outsource
        </Heading>
      </Flex>

      <HSeparator my='20px' />
    </Flex>
  );
}

export default SidebarBrand;
