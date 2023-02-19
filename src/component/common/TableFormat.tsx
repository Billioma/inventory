import React from "react";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { scrollBarStyle } from "@/utils/helper";

const TableFormat = ({ header, children }: any) => {
  return (
    <TableContainer>
      <Table overflowX="scroll" sx={scrollBarStyle}>
        <Thead>
          <Tr>
            {header?.map((data: any, i: any) => (
              <Th
                key={i}
                textTransform="capitalize"
                fontSize="14px"
                fontWeight={500}
                color="#5D6679"
              >
                {data}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableFormat;
