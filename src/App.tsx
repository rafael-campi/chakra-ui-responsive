import './App.css'
import { useState } from 'react';
import { Provider } from './components/ui/provider';
import FlexLayout from './components/flex-layout';
import GridLayout from './components/grid-layout';
import { Stack, Box } from '@chakra-ui/react';
import TopNavbar from './components/top-navbar';
import { useColorModeValue } from './components/ui/color-mode';
import AlterLayout from './components/alter-loyout';

function AppContent() {
  const [page, setPage] = useState("grid");
  
  const bgGradient = useColorModeValue(
    "linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)",
    "linear-gradient(135deg, #0a1929 0%, #0f2744 50%, #1a3a5c 100%)"
  );
  
  const bgColor = useColorModeValue("bg", "bg");

  return (
    <Box
      minH="100vh"
      w="100vw"
      bg={bgColor}
      bgGradient={bgGradient}
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgImage: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
        pointerEvents: "none",
      }}
    >
      <Stack w="100%" minH="100vh" position="relative" zIndex={1}>
        <TopNavbar />
        <Stack marginTop="10%">
          <AlterLayout setPage={setPage} />
          {page === "grid" && <GridLayout />}
          {page === "flex" && <FlexLayout />}
        </Stack>
      </Stack>
    </Box>
  );
}

function App() {
  return (
    <Provider enableSystem={false} defaultTheme="light">
      <AppContent />
    </Provider>
  );
}

export default App;