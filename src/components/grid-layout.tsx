import {
    Container,
    Text,
    Box,
    Image,
    Grid,
  } from "@chakra-ui/react";
  
  function GridPassage() {
    return (
      <Box mb={"56px"} textAlign={"center"} color={"text_primary"}>
     <Text fontSize={"5xl"} fontWeight={"black"} mb={"2"} color={'white'}> Grid Layout</Text>
      </Box>
    );
  }
  
  function GridCard({ title, description, imageUrl }) {
    return (
      <Box
        borderRadius={"lg"}
        overflow={"hidden"}
        bg={"white"}
        boxShadow={"md"}
        transition={"all 0.3s"}
        _hover={{
          transform: "translateY(-4px)",
          boxShadow: "xl",
        }}
      >
        <Image
          src={imageUrl}
          alt={title}
          height={"200px"}
          width={"100%"}
          objectFit={"cover"}
          bg={"gray.200"}
        />
        <Box p={"6"}>
          <Text fontSize={"xl"} fontWeight={"bold"} mb={"2"}>
            {title}
          </Text>
          <Text color={"gray.600"}>{description}</Text>
        </Box>
      </Box>
    );
  }
  
  function ElasticGrid({ items }) {
    return (
      <Box>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          gap={{
            base: 2,
            md: 3,
            lg: 5,
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
      <Container as={"section"} maxW={"container.xl"} py={"12"}>
        <GridPassage />
        <ElasticGrid items={features} />
      </Container>
    );
  }