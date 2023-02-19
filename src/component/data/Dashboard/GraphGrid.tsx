import React, { useEffect, useState } from "react";
import { Box, GridItem, Flex, Heading, Text } from "@chakra-ui/react";
import GridWrapper from "../../common/GridWrapper";
import { BarChart } from "../BarChart";
import { AiOutlineCalendar } from "react-icons/ai";
import { calFil } from "@/component/common/constants";
import { AreaChart } from "../AreaChart";

const GraphGrid = () => {
  const [show, setShow] = useState(false);
  const [label, setLabel] = useState("Filter");

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (event.target.closest(".box") === null) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <GridWrapper dashboard>
      <GridItem colSpan={[1, 1, 1, 3]}>
        <Box bg="#fff" p="15px" borderRadius="8px">
          <Flex justifyContent="space-between" align="center">
            <Heading fontWeight={600} fontSize="18px" color="#383E49">
              Sales & Purchase
            </Heading>

            <Box pos="relative" className="box">
              <Flex
                border="1px solid #D0D3D9"
                gap="8px"
                align="center"
                cursor="pointer"
                _hover={{ boxShadow: "lg" }}
                px="20px"
                onClick={() => setShow((prev) => !prev)}
                py="8px"
                borderRadius="4px"
              >
                <AiOutlineCalendar size="20px" />
                <Text fontSize="14px" fontWeight={500}>
                  {label}
                </Text>
              </Flex>

              {show && (
                <Box
                  bg="#fff"
                  border="1px solid #D0D3D9"
                  boxShadow="lg"
                  textAlign="center"
                  w="full"
                  zIndex="1"
                  p="5px"
                  borderRadius="5px"
                  pos="absolute"
                  top={42}
                >
                  {calFil?.map((data, i) => (
                    <Text
                      _hover={{
                        background: "#f1f1f1",
                        borderRadius: "5px",
                      }}
                      cursor="pointer"
                      onClick={() => {
                        setLabel(data);
                        setShow(false);
                      }}
                      fontSize="14px"
                      padding="5px"
                      mb="10px"
                      key={i}
                    >
                      {data}
                    </Text>
                  ))}
                </Box>
              )}
            </Box>
          </Flex>

          <BarChart />
        </Box>
      </GridItem>

      <GridItem colSpan={[1, 1, 1, 2]}>
        <Box bg="#fff" p="15px" borderRadius="8px">
          <Heading fontWeight={600} fontSize="18px" color="#383E49">
            Order Summary
          </Heading>

          <AreaChart />
        </Box>
      </GridItem>
    </GridWrapper>
  );
};

export default GraphGrid;
