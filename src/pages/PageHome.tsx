import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import { BlogPostCard } from "../src/components/BlogPostCard";

export const PageHome = () => {
  return (
    <VStack w="full" fontFamily="sans-serif" h="full">
      <HStack w="full" maxW="container.lg" h="15vh" justify="space-between">
        <Text fontWeight="bold">Padre Alfonso Pastore Vive</Text>

        <HStack spacing="8">
          <Link>Vida</Link>
          <Link>Obra</Link>
          <Link>Comunidade Espiritual</Link>
          <Link>Arquivo de Notícias</Link>
          <Link>Fale Conosco</Link>
        </HStack>
      </HStack>

      <HStack w="full" maxW="container.lg" justify="space-between" py="4">
        <VStack w="full">
          <Image src="/hero.jpg" objectFit="cover" alt="Hero Image" w="full" />
        </VStack>

        <VStack w="full" align="flex-start" p="4" spacing="8">
          <VStack w="full" p="0" align="flex-start">
            <Text fontWeight="bold" fontSize="4xl">
              Padre Alfonso Pastore
            </Text>
            <Text>
              Descubra mais sobre a vida e obra do Padre Alfonso Pastore
            </Text>
          </VStack>

          <HStack>
            <Button colorScheme="linkedin" size="lg" borderRadius="4">
              Comprar Livro
            </Button>
          </HStack>
        </VStack>
      </HStack>

      <VStack w="full" maxW="container.lg" align="flex-start">
        <Text fontWeight="bold" fontSize="xl">
          Pré-lançamento
        </Text>

        <SimpleGrid
          w="full"
          gridTemplateColumns="1fr 1fr 1fr"
          gap="8"
          align="start"
          py="8"
        >
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
        </SimpleGrid>
      </VStack>

      <VStack w="full" maxW="container.lg" align="flex-start">
        <Text fontWeight="bold" fontSize="xl">
          Outras Notícias
        </Text>

        <SimpleGrid
          w="full"
          gridTemplateColumns="1fr 1fr 1fr"
          gap="8"
          align="start"
          py="8"
        >
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
        </SimpleGrid>
      </VStack>

      <VStack w="full" maxW="container.lg" align="flex-start">
        <Text fontWeight="bold" fontSize="xl">
          Artigos
        </Text>

        <SimpleGrid
          w="full"
          gridTemplateColumns="1fr 1fr 1fr"
          gap="8"
          align="start"
          py="8"
        >
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};
