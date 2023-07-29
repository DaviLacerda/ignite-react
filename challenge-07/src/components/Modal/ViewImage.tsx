import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        bg={null}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="100%" maxW="900px"
      >
        <ModalBody>
          <Image
            w="100%"
            objectFit="cover"
            maxWidth="900px"
            maxHeight="600px"
            src={imgUrl}
          />
          <ModalFooter bg="pGray.800" justifyContent="flex-start" borderBottomRadius="6px">
            <Link href={imgUrl} isExternal fontSize="0.875rem" color="pGray.50">
              Abrir original
            </Link>
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
