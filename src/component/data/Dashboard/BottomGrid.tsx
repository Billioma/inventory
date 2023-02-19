import React from "react";
import { Box, GridItem, Flex, Heading, Text } from "@chakra-ui/react";
import GridWrapper from "../../common/GridWrapper";
import { sellHead, stock } from "@/component/common/constants";
import TableFormat from "@/component/common/TableFormat";
import TableBod from "./TableBod";
import Image from "next/image";

const BottomGrid = () => {
  return (
    <GridWrapper dashboard>
      <GridItem colSpan={[2, 2, 1, 3]}>
        <Box bg="#fff" p="15px" borderRadius="8px">
          <Heading mb="20px" fontWeight={600} fontSize="18px" color="#383E49">
            Top Selling Stock
          </Heading>

          <TableFormat header={sellHead}>
            <TableBod />
            <TableBod />
            <TableBod />
          </TableFormat>
        </Box>
      </GridItem>

      <GridItem colSpan={[2, 2, 1, 2]}>
        <Box bg="#fff" p="15px" borderRadius="8px">
          <Heading fontWeight={600} fontSize="18px" color="#383E49">
            Low Quantity Stock
          </Heading>

          <Box mt="13px">
            {stock?.map((data) => (
              <Flex
                gap="26px"
                justifyContent="space-between"
                key={data.id}
                align="center"
              >
                <Image
                  src={data.img}
                  alt="snack"
                  style={{ width: "69px", height: "69px" }}
                />

                <Box>
                  <Text fontWeight={600}>{data.title}</Text>
                  <Text mt="4px" fontSize="14px">
                    Remaining Quantity: 10 Packet
                  </Text>
                </Box>

                <Text
                  bg="#FEECEB"
                  textAlign="center"
                  px="13px"
                  color="#AA3028"
                  py="2px"
                  borderRadius="16px"
                  w="fit-content"
                  h="fit-content"
                >
                  Low
                </Text>
              </Flex>
            ))}
          </Box>
        </Box>
      </GridItem>
    </GridWrapper>
  );
};

export default BottomGrid;
