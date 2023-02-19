import React from "react";
import { Box, Flex, Icon, GridItem, Heading, Text } from "@chakra-ui/react";
import GridWrapper from "../../common/GridWrapper";

const GridTopLayout = ({ array, array2, label1, label2 }: any) => {
  return (
    <GridWrapper dashboard>
      <GridItem colSpan={[1, 1, 1, 3]}>
        <Box bg="#fff" p="15px" borderRadius="8px">
          <Heading fontWeight={600} fontSize="18px" color="#383E49">
            {label1}
          </Heading>

          <GridWrapper sub>
            {array.map((dat: any) => (
              <GridItem key={dat.id}>
                <Flex
                  mt="18px"
                  gap="15px"
                  flexDir="column"
                  borderRight={dat.id !== 4 ? "1px solid #F0F1F3" : ""}
                  justifyContent="center"
                  align="center"
                >
                  <Box bg={dat.bg} borderRadius="4px" p="3px">
                    <Icon w="23px" h="21px" color={dat.color} as={dat.img} />
                  </Box>
                  <Flex gap="15px" align="center">
                    <Text color="#5D6679" fontSize="13px" fontWeight={600}>
                      {dat.fig}
                    </Text>
                    <Text fontSize="12px" color="#667085">
                      {dat.label}
                    </Text>
                  </Flex>
                </Flex>
              </GridItem>
            ))}
          </GridWrapper>
        </Box>
      </GridItem>

      <GridItem colSpan={[1, 1, 1, 2]}>
        <Box bg="#fff" p="15px" borderRadius="8px">
          <Heading fontWeight={600} fontSize="18px" color="#383E49">
            {label2}
          </Heading>

          <GridWrapper subb>
            {array2.map((dat: any) => (
              <GridItem key={dat.id}>
                <Flex
                  mt="18px"
                  gap="15px"
                  flexDir="column"
                  borderRight={dat.id !== 2 ? "1px solid #F0F1F3" : ""}
                  justifyContent="center"
                  align="center"
                >
                  <Box bg={dat.bg} borderRadius="4px" p="3px">
                    <Icon w="23px" h="21px" color={dat.color} as={dat.img} />
                  </Box>
                  <Flex gap="15px" align="center">
                    <Text color="#5D6679" fontSize="13px" fontWeight={600}>
                      {dat.fig}
                    </Text>
                    <Text fontSize="12px" color="#667085">
                      {dat.label}
                    </Text>
                  </Flex>
                </Flex>
              </GridItem>
            ))}
          </GridWrapper>
        </Box>
      </GridItem>
    </GridWrapper>
  );
};

export default GridTopLayout;
