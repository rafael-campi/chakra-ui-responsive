import { Box, Container, Flex, HStack, Text, IconButton } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "./ui/color-mode";

export default function TopNavbar() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("text_primary", "text_invert");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const hoverBg = useColorModeValue("secondary_light", "gray.800");

  const ColorModeIcon = () => {
    const { colorMode } = useColorMode();
    return colorMode === "dark" ? (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ) : (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    );
  };

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      bg={bgColor}
      backdropFilter="blur(10px)"
      boxShadow="sm"
      borderBottom="1px solid"
      borderColor={borderColor}
      zIndex="100"
    >
      <Container maxW="container.xl">
        <Flex
          justify="space-between"
          align="center"
          py="4"
        >
          <Box as="a" href="#home" textDecoration="none" cursor="pointer">
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="primary"
              _hover={{ opacity: 0.8 }}
              transition="opacity 0.2s"
            >
              DevSite
            </Text>
          </Box>

          <HStack gap="1" display={{ base: "none", md: "flex" }}>
            <Box as="a" href="#home" textDecoration="none">
              <Text
                px="4"
                py="2"
                borderRadius="md"
                color={textColor}
                fontWeight="medium"
                transition="all 0.2s"
                cursor="pointer"
                _hover={{
                  bg: hoverBg,
                }}
              >
                Home
              </Text>
            </Box>
            <Box as="a" href="#projetos" textDecoration="none">
              <Text
                px="4"
                py="2"
                borderRadius="md"
                color={textColor}
                fontWeight="medium"
                transition="all 0.2s"
                cursor="pointer"
                _hover={{
                  bg: hoverBg,
                }}
              >
                Projetos
              </Text>
            </Box>
            <Box as="a" href="#sobre" textDecoration="none">
              <Text
                px="4"
                py="2"
                borderRadius="md"
                color={textColor}
                fontWeight="medium"
                transition="all 0.2s"
                cursor="pointer"
                _hover={{
                  bg: hoverBg,
                }}
              >
                Sobre
              </Text>
            </Box>
            <Box as="a" href="#contato" textDecoration="none">
              <Text
                px="4"
                py="2"
                borderRadius="md"
                color={textColor}
                fontWeight="medium"
                transition="all 0.2s"
                cursor="pointer"
                _hover={{
                  bg: hoverBg,
                }}
              >
                Contato
              </Text>
            </Box>
          </HStack>

          <IconButton
            onClick={toggleColorMode}
            variant="ghost"
            aria-label="Toggle color mode"
            size="md"
            color={textColor}
            _hover={{
              bg: hoverBg,
            }}
          >
            <ColorModeIcon />
          </IconButton>
        </Flex>
      </Container>
    </Box>
  );
}