import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { token } = useSelector((store) => store.UserReducer);
  return <Box>{token}</Box>;
};

export default Cart;
