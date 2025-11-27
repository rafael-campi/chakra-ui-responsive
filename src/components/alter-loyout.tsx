import { Box, Button, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { useColorModeValue } from "./ui/color-mode";

interface AlterLayoutProps {
  setPage: (page: string) => void;
}

export default function AlterLayout({ setPage }: AlterLayoutProps) {
  const [activeTab, setActiveTab] = useState("grid");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setPage(tab);
  };

  const bgColor = useColorModeValue("whiteAlpha.300", "blackAlpha.400");
  const activeBg = useColorModeValue("white", "gray.800");
  const activeColor = useColorModeValue("primary", "text_invert");
  const inactiveColor = useColorModeValue("text_primary", "text_invert");
  const hoverBg = useColorModeValue("whiteAlpha.400", "whiteAlpha.200");
  const borderColor = useColorModeValue("whiteAlpha.400", "whiteAlpha.300");

  return (
    <Box
      position="fixed"
      top="102px"
      left="32px"
      zIndex="50"
    >
      <HStack
        bg={bgColor}
        backdropFilter="blur(12px)"
        borderRadius="full"
        p="6px"
        gap="4px"
        border="1px solid"
        borderColor={borderColor}
        boxShadow="lg"
      >
        <Button
          onClick={() => handleTabChange("grid")}
          borderRadius="full"
          px="24px"
          py="10px"
          fontWeight="medium"
          bg={activeTab === "grid" ? activeBg : "transparent"}
          color={activeTab === "grid" ? activeColor : inactiveColor}
          border={activeTab === "grid" ? "2px solid" : "2px solid transparent"}
          borderColor={activeTab === "grid" ? "primary" : "transparent"}
          boxShadow={activeTab === "grid" ? "md" : "none"}
          transition="all 0.3s"
          _hover={{
            bg: activeTab === "grid" ? activeBg : hoverBg,
            transform: "translateY(-2px)",
          }}
          _active={{
            transform: "translateY(0)",
          }}
          leftIcon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="1" y="1" width="6" height="6" rx="1" />
              <rect x="9" y="1" width="6" height="6" rx="1" />
              <rect x="1" y="9" width="6" height="6" rx="1" />
              <rect x="9" y="9" width="6" height="6" rx="1" />
            </svg>
          }
        >
          Grid
        </Button>
        <Button
          onClick={() => handleTabChange("flex")}
          borderRadius="full"
          px="24px"
          py="10px"
          fontWeight="medium"
          bg={activeTab === "flex" ? activeBg : "transparent"}
          color={activeTab === "flex" ? activeColor : inactiveColor}
          border={activeTab === "flex" ? "2px solid" : "2px solid transparent"}
          borderColor={activeTab === "flex" ? "primary" : "transparent"}
          boxShadow={activeTab === "flex" ? "md" : "none"}
          transition="all 0.3s"
          _hover={{
            bg: activeTab === "flex" ? activeBg : hoverBg,
            transform: "translateY(-2px)",
          }}
          _active={{
            transform: "translateY(0)",
          }}
          leftIcon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M2 4h12M2 8h12M2 12h12" />
            </svg>
          }
        >
          Flex
        </Button>
      </HStack>
    </Box>
  );
}