// Chakra imports
import { Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';

import Dropzone from 'views/admin/profile/components/Dropzone';

export default function Upload(props: {
  used?: number;
  total?: number;
  [x: string]: any;
}) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'gray.400';

  return (
    <Card {...rest} mb='20px' alignItems='center' p='20px'>
      <Flex h='100%' direction={{ base: 'column', '2xl': 'row' }}>
        <Dropzone />
        <Flex direction='column' pe='44px'>
          <Text
            color={textColorPrimary}
            fontWeight='bold'
            textAlign='start'
            fontSize='2xl'
            mt={{ base: '20px', '2xl': '50px' }}>
            Complete your profile
          </Text>
          <Text
            color={textColorSecondary}
            fontSize='md'
            my={{ base: 'auto', '2xl': '10px' }}
            mx='auto'
            textAlign='start'>
            Stay on the pulse of distributed projects with an anline whiteboard
            to plan, coordinate and discuss
          </Text>
          <Flex w='100%'>
            <Button
              me='100%'
              mb='50px'
              w='140px'
              minW='140px'
              mt={{ base: '20px', '2xl': 'auto' }}
              variant='brand'
              fontWeight='500'>
              Publish now
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
