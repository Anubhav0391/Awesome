import { FaWhatsapp  } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import {
  Card,
  Image,
  Box,
  Text,
  HStack,
} from "@chakra-ui/react";

import React from "react";

const HomeCard = ({ designer, followers, id, image, likes }) => {
  return (
    <Card maxW="300px" boxShadow="base" maxH="360px">
      <Image objectFit="cover" m={2} src={image} alt="Image deleted" />

      <div>
        <HStack gap={6}>
          <Box p="0 0 100px 15px">
            <Text fontSize="14" fontWeight="600">
              By {designer}
            </Text>
            <Text fontSize="10">{followers} Followers</Text>
          </Box>
          <Text position="absolute" right={'84px'} fontSize="13" bottom={'8px'} color={"gray"}>
            {likes} Likes
          </Text>

          <Text position="absolute" right={'27px'} fontSize="13" bottom={'8px'}  color={"gray"}>
            Share
          </Text>
        </HStack>

        <Box
          position="absolute"
          bg="white"
          right="80px"
          bottom="35px"
          p={'4px'}
          borderRadius="50%"
          boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}
        >
          <CiHeart  color= "#E91E63" fontSize= "45px"/>
        </Box>
        <Box
          position="absolute"
          bg="white"
          borderRadius="50%"
          boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}
          p={'7px'}
          right="19px"
          bottom="35px"
        >
          <FaWhatsapp color= "#8BC34A" fontSize= "40px" />
        </Box>
      </div>
    </Card>
  );
};

export default HomeCard;
