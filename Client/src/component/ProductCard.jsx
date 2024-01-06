import { FaWhatsapp  } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import {
  Card,
  Image,
  HStack,
  Stat,
  StatNumber,
  StatHelpText,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import React from "react";

const ProductCard = ({ id, title, brand, price, img1 }) => {
  return (
    <Link to={`/mens/${id}`}>
      <Card maxW="400px" h={'100%'} boxShadow="base" borderRadius={0} cursor="pointer">
        <Text m={2} fontSize={13} fontWeight={500}>
          # {title.substring(0, 45)}
        </Text>
        <Image p={1} src={img1} alt="Chakra UI" />
        <HStack spacing="25px" px="5">
          <Stat>
            <StatNumber fontSize="18">₹ {price}</StatNumber>
            <StatHelpText>By {brand}</StatHelpText>
          </Stat>
          <CiHeart color= "#E91E63" fontSize= "45px" />
          <FaWhatsapp color= "#8BC34A" fontSize= "40px" />
        </HStack>
      </Card>
    </Link>
  );
};

export default ProductCard;
