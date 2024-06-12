import {
    Button,
    Flex,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Text,
  } from "@chakra-ui/react";
  import { FC } from "react";
  import { useOutletContext } from "react-router-dom";
  import { OutletContext } from "../components/Layout";
  import { useMetamask } from "../lib";
  
  const Mint: FC = () => {
    const { signer, setSigner } = useOutletContext<OutletContext>();
  
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
          <Flex>
            <NumberInput defaultValue={0} min={0} max={5}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        ) : (
          <Flex flexDir="column" gap={[4, 4, 8]} alignItems="center">
            <Text fontSize={[20, 20, 28]}>
              🥹 바다를 구하기 위해선 로그인이 필요해!
            </Text>
            <Button
              colorScheme="blue"
              w="fit-content"
              onClick={() => useMetamask(setSigner)}
            >
              🦊 로그인
            </Button>
          </Flex>
        )}
      </Flex>
    );
  };
  
  export default Mint;