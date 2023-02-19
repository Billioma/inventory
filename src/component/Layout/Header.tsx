import React, { useEffect, useState } from "react";
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  useMediaQuery,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { MdMenu, MdOutlineNotificationsActive } from "react-icons/md";
import Image from "next/image";
import { avatar } from "@/assets/exports";
import SideDrawer from "./SideDrawer";

const Header = () => {
  const [showDrawerMenu, setShowDrawerMenu] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 991px)");
  const toggleSidebar = () => {
    setShowDrawerMenu(true);
  };
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <Flex
      justifyContent="center"
      bg={scroll ? "rgba(255, 255, 255, 0.15)" : "#fff"}
      backdropFilter={"blur(10px)"}
      align="center"
      pl={!isMobile ? "270px" : "30px"}
      border="1px solid #EEEEEE"
      pos="fixed"
      zIndex="2"
      w="100%"
      pr="32px"
      h="80px"
      color="#858D9D"
    >
      <SideDrawer
        isOpen={showDrawerMenu}
        onClose={() => setShowDrawerMenu(false)}
      />
      {!isMobile ? (
        <Flex justifyContent="space-between" w="100%" align="center">
          <InputGroup>
            <InputLeftElement>
              <BsSearch />
            </InputLeftElement>
            <Input
              placeholder="Search product, supplier, order"
              w="400px"
              variant="alternate"
            />
          </InputGroup>

          <Flex align="center" gap="22px">
            <MdOutlineNotificationsActive size="28px" />
            <Image
              src={avatar}
              style={{ borderRadius: "50px", width: "35px", height: "35px" }}
              alt="profile"
            />
          </Flex>
        </Flex>
      ) : (
        <Flex justifyContent="space-between" w="100%" align="center">
          <MdMenu onClick={toggleSidebar} size="28px" />
          <Flex align="center" gap="22px">
            <MdOutlineNotificationsActive size="28px" />
            <Image
              src={avatar}
              style={{ borderRadius: "50px", width: "35px", height: "35px" }}
              alt="profile"
            />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default Header;
