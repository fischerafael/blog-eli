import { Image } from "@chakra-ui/image";
import { Text, VStack } from "@chakra-ui/layout";

export const BlogPostCard = () => {
  return (
    <VStack w="full" align="flex-start">
      <Image
        height="30vh"
        w="full"
        objectFit="cover"
        src="https://images.adsttc.com/media/images/5f6b/81c9/63c0/177d/1000/0410/large_jpg/ZB638-11.jpg?1600881085"
      />
      <Text fontWeight="bold">Igreja em que o Padre cresceu</Text>
    </VStack>
  );
};
