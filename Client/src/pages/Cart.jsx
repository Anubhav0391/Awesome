import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Img,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, getCart, updateQty } from "../Redux/UserReducer/action";

import QtyModal from "../component/QtyModal";
import Address from "../component/Address";

const Cart = () => {
  const { token, cart, loading } = useSelector((store) => store.UserReducer);
  const dispatch = useDispatch();
  const [address,setAddress]=useState(false)

  useEffect(() => {
    dispatch(getCart(token));
  }, []);

  function calculateTotal() {
    return cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  }

  function handleDelete(id) {
    dispatch(deleteFromCart(token, id)).then(() => dispatch(getCart(token)));
  }

  return loading ? (
    <Skeleton h={"75vh"} w={"90vw"} my={10} />
  ) : (
    <Container maxW={{ base: "100vw", md: "90vw" }} minH={"85vh"}>
      {!address && <Text color={"gray"} fontSize={20} marginBottom={7}>
        {cart.length} items (₹ {calculateTotal()})
      </Text>}
      <Flex
        justify={"space-between"}
        align={"flex-start"}
        flexDir={{ base: "column", xl: "row" }}
      >
       {address?<Address/>: <VStack
          mb={5}
          gap={2}
          w={{ base: "100%", xl: "50vw" }}
          h={{ base: "auto", xl: "70vh" }}
          overflowY={{ base: "none", xl: "scroll" }}
        >
          {cart?.map((el) => (
            <HStack
              gap={0}
              bg={"white"}
              key={el._id}
              w={"100%"}
              h={{ base: "170px", sm: "240px" }}
              align={"flex-start"}
            >
              <Img src={el.img1} h={"100%"} w={"25%"} />
              <Box p={{ base: 2, sm: 5 }} w={"75%"} pos={"relative"}>
                <Text fontSize={{ base: 17, sm: 25 }}>{el.title}</Text>
                <Text color={"gray"}>By {el.brand}</Text>
                <HStack>
                  <Text>Price</Text>
                  <Text fontSize={{ base: 17, sm: 25 }}>
                    : &nbsp; ₹ {el.quantity * el.price}
                  </Text>
                </HStack>
                <HStack>
                  <Text>Size</Text>
                  <Text fontSize={{ base: 17, sm: 25 }}>
                    : &nbsp; {el.size}
                  </Text>
                </HStack>
                <HStack>
                  <Text>Quantity</Text>
                  <Text fontSize={{ base: 17, sm: 25 }}>:</Text>
                  <QtyModal el={el} />
                </HStack>
                <Button
                  variant={"ghost"}
                  fontSize={{ base: 17, sm: 25 }}
                  pos={"absolute"}
                  top={{ base: "0.5px", sm: "1px" }}
                  right={{ base: "0.5px", sm: "1px" }}
                  onClick={() => handleDelete(el._id)}
                >
                  ×
                </Button>
              </Box>
            </HStack>
          ))}
        </VStack>}
        <Box
          w={{ base: "100%", xl: "36vw" }}
          bg={"white"}
          p={{ base: 5, xl: 10 }}
          py={{ base: 5, xl: 10 }}
        >
          <Text fontSize={25}>SUMMARY</Text>
          <HStack w={"100%"} pt={{ base: 5, xl: 10 }} justify={"space-between"}>
            <Text>Total Price</Text>
            <Text> ₹ {calculateTotal()}</Text>
          </HStack>
          <HStack w={"100%"} pt={{ base: 5, xl: 10 }} justify={"space-between"}>
            <Text>Shipping Charges</Text>
            <Text color={"#B3CC33"}> FREE</Text>
          </HStack>
          <HStack w={"100%"} pt={{ base: 5, xl: 10 }} justify={"space-between"}>
            <Text>Handling Charges</Text>
            <Text>+ ₹ 99</Text>
          </HStack>
          <HStack
            color={"#D3145A"}
            justify={"space-between"}
            fontSize={25}
            w={"100%"}
            pt={{ base: 5, xl: 10 }}
          >
            <Text>Amount Payable</Text>
            <Text> ₹ {calculateTotal() + 99}</Text>
          </HStack>
          <Button
            mt={{ base: 5, xl: 10 }}
            fontSize={25}
            p={7}
            w={"100%"}
            color={"white"}
            background="linear-gradient(to right,rgb(234, 63, 92), rgb(147, 7, 147))"
            onClick={()=>address?'':setAddress(true)}
          >
            PLACE ORDER
          </Button>
        </Box>
      </Flex>
    </Container>
  );
};

export default Cart;
