import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { bottom, data } from "../common/constants";
import { log } from "@/assets/exports";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const activeStyle = {
    color: "#1570EF",
    alignItems: "center",
    display: "flex",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "24px",
    margin: "6px 0 2px 0",
    padding: "13px 0",
    borderRadius: "10px",
  };
  const router = useRouter();
  return (
    <Flex
      flexDir="column"
      borderRight="1px solid #F0F1F3"
      justifyContent="space-between"
      position={"fixed"}
      minH="100vh"
      zIndex="5"
      w="240px"
      bgColor="#fff"
      p="24px"
    >
      <Flex px="16px" mb="22px" align="center" gap="12px">
        <Image src={log} alt="logo" style={{ width: "42px", height: "42px" }} />
        <Text color="blue" fontWeight={600} fontSize="20px">
          KANBAN
        </Text>
      </Flex>
      <Box pt="8px" px="16px" flex="1" pos="relative" zIndex="9">
        {data.map((item) => (
          <Box key={item.path} className="link_box">
            <Link
              href={item.path}
              style={
                router.pathname === item.path
                  ? { ...activeStyle }
                  : {
                      ...activeStyle,
                      color: "#5D6679",
                    }
              }
            >
              <Flex className="li">
                <Icon as={item.icon} w="20px" h="20px" mr="16px" />
                {item.name}
              </Flex>
            </Link>
          </Box>
        ))}
      </Box>

      <Box px="16px">
        {bottom.map((item) => (
          <Box key={item.path} className="link_box">
            {item.path ? (
              <Link
                href={item.path}
                style={
                  router.pathname === item.path
                    ? { ...activeStyle }
                    : {
                        ...activeStyle,
                        color: "#5D6679",
                      }
                }
              >
                <Flex className="li">
                  <Icon as={item.icon} w="20px" h="20px" mr="16px" />
                  {item.name}
                </Flex>
              </Link>
            ) : (
              <Flex
                cursor="pointer"
                style={{
                  ...activeStyle,
                  color: "#5D6679",
                }}
              >
                <Flex className="log">
                  <Icon as={item.icon} w="20px" h="20px" mr="16px" />
                  {item.name}
                </Flex>
              </Flex>
            )}
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default React.memo(Sidebar);
