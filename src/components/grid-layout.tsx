import {
  Container,
  Text,
  Box,
  Image,
  Grid,
} from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";

function GridPassage() {
  const textColor = useColorModeValue("text_primary", "text_invert");
  
  return (
    <Box mb="56px" textAlign="center" mt="80px">
      <Text 
        fontSize="5xl" 
        fontWeight="black" 
        mb="2" 
        color={textColor}
        bgGradient="to-r" 
        gradientFrom="primary" 
        gradientTo="secondary"
        bgClip="text"
      >
        Grid Layout
      </Text>
      <Text 
        fontSize="lg" 
        color={useColorModeValue("text_secondary", "gray.400")}
        maxW="2xl"
        mx="auto"
      >
        Explore nossas tecnologias favoritas para desenvolvimento moderno
      </Text>
    </Box>
  );
}

function GridCard({ title, description, imageUrl }) {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("text_primary", "text_invert");
  const descColor = useColorModeValue("text_secondary", "gray.400");
  const hoverBorderColor = useColorModeValue("primary", "secondary");
  const iconBg = useColorModeValue("secondary_light", "gray.700");

  return (
    <Box
      borderRadius="xl"
      overflow="hidden"
      bg={bgColor}
      border="2px solid"
      borderColor={borderColor}
      boxShadow="lg"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "2xl",
        borderColor: hoverBorderColor,
      }}
      cursor="pointer"
    >
      <Box
        bg={iconBg}
        p="8"
        display="flex"
        alignItems="center"
        justifyContent="center"
        minH="200px"
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgGradient: "to-br",
          gradientFrom: "transparent",
          gradientTo: "blackAlpha.50",
          opacity: 0,
          transition: "opacity 0.3s",
        }}
        _hover={{
          _before: {
            opacity: 1,
          },
        }}
      >
        <Image
          src={imageUrl}
          alt={title}
          boxSize="120px"
          objectFit="contain"
          filter="drop-shadow(0 4px 12px rgba(0,0,0,0.15))"
          transition="all 0.3s"
          _hover={{
            transform: "scale(1.1) rotate(5deg)",
          }}
        />
      </Box>
      <Box p="6">
        <Text 
          fontSize="xl" 
          fontWeight="bold" 
          mb="2"
          color={textColor}
        >
          {title}
        </Text>
        <Text 
          color={descColor}
          fontSize="sm"
          lineHeight="1.6"
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
}

function ElasticGrid({ items }) {
  return (
    <Box>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={{
          base: 4,
          md: 5,
          lg: 6,
        }}
      >
        {items.map((item, index) => (
          <GridCard
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default function GridLayout() {
  const features = [
    {
      title: "JavaScript",
      description: "Linguagem versátil para web, front-end e back-end",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      title: "Python",
      description: "Linguagem poderosa para data science e automação",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      title: "TypeScript",
      description: "JavaScript com tipagem estática para maior segurança",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      title: "React",
      description: "Biblioteca para construção de interfaces modernas",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      title: "Node.js",
      description: "Runtime JavaScript para desenvolvimento back-end",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
  ];

  return (
    <Container as="section" maxW="container.xl" py="12">
      <GridPassage />
      <ElasticGrid items={features} />
    </Container>
  );
}