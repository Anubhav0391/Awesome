import { FaWhatsapp } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
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

import React, { useState } from "react";

const ProductCard = ({ id, title, brand, price, img1 }) => {
  const [like, setLike] = useState(false);
  return (
    <Card maxW="400px" h={"100%"} boxShadow="base" borderRadius={0}>
      <Link to={`/mens/${id}`}>
        <Text m={2} fontSize={13} fontWeight={500}>
          # {title.substring(0, 45)}
        </Text>
        <Image p={1} src={img1} alt="Chakra UI" />
      </Link>
      <HStack spacing="25px" px="5">
        <Stat>
          <StatNumber fontSize="18">₹ {price}</StatNumber>
          <StatHelpText>By {brand}</StatHelpText>
        </Stat>
        {like ? (
          <IoIosHeart
            color="#E91E63"
            fontSize="40px"
            cursor={"pointer"}
            onClick={() => setLike((p) => !p)}
          />
        ) : (
          <IoIosHeartEmpty
            color="#E91E63"
            fontSize="40px"
            cursor={"pointer"}
            onClick={() => setLike((p) => !p)}
          />
        )}
        <FaWhatsapp color="#8BC34A" fontSize="40px" cursor={"pointer"} />
      </HStack>
    </Card>
  );
};

export default ProductCard;
