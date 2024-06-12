import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Progress,
  Text,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { OutletContext } from "../components/Layout";
import PuzzleCard from "../components/PuzzleCard";

const Home: FC = () => {
  const [mintedList, setMintedList] = useState<boolean[]>([]);
  const [progress, setProgress] = useState<number>(0);

  const { signer, mintContract } = useOutletContext<OutletContext>();

  const getCheckNfts = async () => {
    try {
      if (!signer || !mintContract) return;

      const response = await mintContract.checkNfts(signer.address);

      const temp = response.map((v: boolean) => v);

      setMintedList(temp);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCheckNfts();
  }, [signer, mintContract]);

  useEffect(() => {
    if (mintedList.length === 0) return;

    const temp = mintedList.filter((v) => {
      if (v) {
        return v;
      }
    });

    setProgress((temp.length / mintedList.length) * 100);
  }, [mintedList]);

  return (
    <Flex flexDir="column" w="100%">
      <Flex
        flexDir={"column"}
        gap={[2, 2, 4]}
        h={[20, 20, 40]}
        justifyContent="center"
        alignItems="center"
        fontSize={[24, 24, 48]}
      >
        <Text>⛔️ 바다가 좋아요!!! ⛔️</Text>
        <Button variant="outline" colorScheme="blue">
          구하러가기
        </Button>
      </Flex>
      <Flex
        flexDir="column"
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
      >
        {signer ? (
          <>
            <Flex w={[320, 320, 640]} my={[4, 4, 8]} gap={[2, 2, 4]}>
              <Text fontSize={[16, 16, 24]}>진행도</Text>
              <Progress hasStripe value={progress} h={[4, 4, 8]} flexGrow={1} />
            </Flex>
            <Grid templateColumns={"repeat(4, 1fr)"}>
              {mintedList.map((v, i) => (
                <PuzzleCard key={i} index={i} isMinted={v} />
              ))}
            </Grid>
          </>
        ) : (
          <Box pos="relative" w={[320, 320, 640]} mt={[4, 4, 8]}>
            <Box
              pos="absolute"
              top={0}
              left={0}
              w="100%"
              h="100%"
              bgColor="rgba(0,0,0,0.5)"
            />
            <Image src="/images/save_the_sea.webp" alt="Save the SEA" />
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default Home;
