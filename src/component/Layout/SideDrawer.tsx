import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Box,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react";
import { data, activeStyle, bottom } from "../common/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import { log } from "@/assets/exports";
import Image from "next/image";

const SideDrawer = ({ isOpen, onClose }: any) => {
  const router = useRouter();

  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="#fff" color="#000">
          <DrawerCloseButton />

          <DrawerBody p={0}>
            {" "}
            <Flex
              flexDir="column"
              w="100%"
              minH="100vh"
              overflowY="hidden"
              transition="0.3s all ease-in-out"
            >
              <Flex
                px="16px"
                borderBottom="1px solid #f1f1f1"
                pb="10px"
                mb="5px"
                mt="30px"
                align="center"
                gap="12px"
              >
                <Image
                  src={log}
                  alt="logo"
                  style={{ width: "42px", height: "42px" }}
                />
                <Text color="blue" fontWeight={600} fontSize="20px">
                  KANBAN
                </Text>
              </Flex>

              <Box pt="8px" px="16px" flex="1" zIndex="9">
                {data.map((item) => (
                  <Box key={item.path} onClick={onClose}>
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
                      <Icon as={item.icon} w="20px" h="20px" mr="16px" />
                      {item.name}
                    </Link>
                  </Box>
                ))}
              </Box>

              <Box px="16px" mb="70px">
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
