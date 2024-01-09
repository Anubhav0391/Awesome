import {
  Box,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { getCart, updateQty } from "../Redux/UserReducer/action";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

function QtyModal({ el }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.UserReducer);

  function handleQty(id) {
    if (el.quantity !== qty) {
      dispatch(updateQty({ quantity: qty }, token, id)).then(() =>
        dispatch(getCart(token))
      );
    }
    onClose();
  }

  return (
    <>
      <HStack
        lineHeight={"33px"}
        cursor={"pointer"}
        bg={"#EEEEEE"}
        borderRadius={10}
        fontSize={{ base: 17, sm: 25 }}
        onClick={() => {
          setQty(el.quantity);
          onOpen();
        }}
      >
        <Text> &nbsp; {el.quantity}</Text>
        <IoMdArrowDropdown />
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg={"blackAlpha.300"} />
        <ModalContent>
          <ModalHeader>Select Quantity</ModalHeader>
          <ModalBody
            display={"grid"}
            gridTemplateColumns={"repeat(5,1fr)"}
            gap={2}
          >
            {new Array(10).fill(0).map((_, i) => (
              <Box
                key={i}
                m={"auto"}
                onClick={() => setQty(i + 1)}
                border={"1px solid #333333"}
                bg={qty === i + 1 && "#333333"}
                color={qty === i + 1 && "white"}
                borderRadius={"50%"}
                textAlign={"center"}
                cursor={"pointer"}
                fontSize={20}
                h={"35px"}
                w={"35px"}
                lineHeight={"35px"}
              >
                {i + 1}
              </Box>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button
              w={"100%"}
              color={"white"}
              background="linear-gradient(to right,rgb(234, 63, 92), rgb(147, 7, 147))"
              onClick={() => handleQty(el._id)}
            >
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default QtyModal;
