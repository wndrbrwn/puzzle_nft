import {
    Button,
    Flex,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
  } from "@chakra-ui/react";
  import { FC } from "react";
  
  interface MintModalProps {
    isOpen: boolean;
    onClose: () => void;
    stsNftMetadata: StsNftMetadata | undefined;
  }
  
  const MintModal: FC<MintModalProps> = ({ isOpen, onClose, stsNftMetadata }) => {
    if (!stsNftMetadata) return <Flex>메타데이터가 없습니다.</Flex>;
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={`/images/puzzle/${stsNftMetadata.tokenId}.png`}
              alt={stsNftMetadata.name}
            />
            <Text>{stsNftMetadata.name}</Text>
            <Text>{stsNftMetadata.description}</Text>
          </ModalBody>
  
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default MintModal;