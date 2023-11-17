import React from 'react';

// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

// Custom components
import AdminLayout from 'layouts/admin';
import Card from 'components/card/Card';

// Assets
import { CiSaveUp1 } from 'react-icons/ci';
import Dropzone from 'views/admin/profile/components/Dropzone';

export default function Create() {
  // Chakra color mode
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
  const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');
  const textColorBrand = useColorModeValue('brand.500', 'white');

  return (
    <AdminLayout brandText='Invoice'>
      <Card mt='100px'>
        <Flex direction={{ base: 'column' }} justify='center'>
          <Box me='auto'>
            <Heading color={textColorDetails} fontSize='36px' mb='10px'>
              Invoice
            </Heading>
            <Text
              mb='10px'
              ms='4px'
              color={textColorSecondary}
              fontWeight='400'
              fontSize='md'>
              Please fill the form!
            </Text>
          </Box>

          <Box pt={{ base: '30px', md: '10px', xl: '20px' }}>
            <FormControl isRequired>
              <FormLabel
                display='flex'
                ms='4px'
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                mb='8px'>
                Invoice Amount
              </FormLabel>
              <Input
                type='number'
                color={textColorBrand}
                placeholder='Input Invoice Amount'
              />
            </FormControl>
          </Box>

          <Box pt={{ base: '30px', md: '10px', xl: '20px' }}>
            <FormControl isRequired>
              <FormLabel
                display='flex'
                ms='4px'
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                mb='8px'>
                Invoice Date
              </FormLabel>
              <Input
                type='date'
                color={textColorBrand}
                placeholder='Input Invoice Amount'
              />
            </FormControl>
          </Box>

          <Box pt={{ base: '30px', md: '10px', xl: '20px' }}>
            <FormControl isRequired>
              <FormLabel
                display='flex'
                ms='4px'
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                mb='8px'>
                Attachment
              </FormLabel>
              <Dropzone />
            </FormControl>
          </Box>

          <Button
            fontSize='sm'
            variant='brand'
            fontWeight='500'
            w='100%'
            h='50'
            leftIcon={<CiSaveUp1 size={30} />}
            my='24px'>
            Save
          </Button>
        </Flex>
      </Card>
    </AdminLayout>
  );
}
