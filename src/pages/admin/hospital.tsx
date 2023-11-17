import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';

import AdminLayout from 'layouts/admin';

import HospitalTable from 'views/admin/dataTables/components/HospitalTable';
import { columnsDataComplex } from 'views/admin/dataTables/variables/columnsData';
import tableDataComplex from 'views/admin/dataTables/variables/tableDataComplex.json';
import { TableData } from 'views/admin/default/variables/columnsData';

export default function Hospital() {
  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <SimpleGrid mb='20px' spacing={{ base: '20px', xl: '20px' }}>
          <HospitalTable
            columnsData={columnsDataComplex}
            tableData={tableDataComplex as unknown as TableData[]}
          />
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
}
