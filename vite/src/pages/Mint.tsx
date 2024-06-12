import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useOutletContext } from "react-router-dom";
import { OutletContext } from "../components/Layout";

const Mint: FC = () => {
  const { signer } = useOutletContext<OutletContext>();

  return (
    <Flex
      flexDir="column"
      w="100%"
      mb={[10, 10, 20]}
      bgColor="red.100"
      justifyContent="center"
      alignItems="center"
    >
      {signer ? (
        <Flex>{signer.address}</Flex>
      ) : (
        <Flex flexDir="column" gap={[4, 4, 8]}>
          <Text>🥹 바다를 구하기 위해선 로그인이 필요해!</Text>
          <Button colorScheme="blue">🦊 로그인</Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Mint;