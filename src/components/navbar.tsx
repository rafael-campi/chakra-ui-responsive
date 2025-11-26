import {
    Container,
    IconButton,
    Link,
    List,
  } from "@chakra-ui/react";
  import { RxHamburgerMenu } from "react-icons/rx";
  
  function NavbarLinks({ setPage }) {
    return (
      <>
        <IconButton
          aria-label="Menu"
          variant={"ghost"}
          _icon={{
            height: "28px",
            width: "28px",
          }}
          display={{
            md: "none",
          }}
        >
          <RxHamburgerMenu />
        </IconButton>
        <List.Root
          listStyleType={"none"}
          display={{
            base: "none",
            md: "flex",
          }}
          flexDirection={"row"}
          gap={"10"}
        >
          <List.Item>
            <Link onClick={() => setPage("grid")} cursor={"pointer"}>Grid</Link>
          </List.Item>
          <List.Item>
            <Link onClick={() => setPage("flex")} cursor={"pointer"}>Flex</Link>
          </List.Item>
        </List.Root>
      </>
    );
  }
  
  export default function Navbar({ setPage }) {
    return (
      <Container
        as={"nav"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        pt={{
          base: "27px",
          md: "32px",
        }}
        pb={{
          base: "63px",
          md: "58px",
          xl: "142px",
        }}
      >
        <NavbarLinks setPage={setPage} />
      </Container>
    );
  }