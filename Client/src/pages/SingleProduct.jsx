import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  List,
  ListItem,
  Skeleton,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../Redux/UserReducer/action";
import { SingleProductSlider } from "../component/Sliders";
import { IoStarOutline, IoStar, IoShareSocial } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const SingleProduct = () => {
  const [size, setSize] = useState("");
  const { id } = useParams();
  const { loading, error, singleProduct } = useSelector(
    (store) => store.UserReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);

  return error ? (
    <Heading my={320} color={"red"}>
      Something bad happened. Please try again !
    </Heading>
  ) : loading ? (
    <Skeleton h={"80vh"} w={"90vw"} />
  ) : (
    <Container maxW={{base:'99vw',md:'90vw'}}>
      <Text color={"gray"} fontSize="14" marginBottom={5}>
        Home » {singleProduct.gender == "male" ? "Men" : "Women"} » clothing »
        top wear
      </Text>
      <Flex justifyContent={"space-between"} align={'flex-start'} flexDir={{base:'column', xl:'row'}}>
        <SingleProductSlider
          img1={singleProduct.img1}
          img2={singleProduct.img2}
          img3={singleProduct.img3}
        />
        <Box w={{base:'100%', xl:'36vw'}} bg={"white"} p={4}>
          <Text fontSize={24}>{singleProduct.title}</Text>
          <Text fontSize={15} color={"gray"}>
            {singleProduct.brand}
          </Text>
          <HStack gap={1} fontSize={20}>
            <Text fontSize={25}>4.0</Text>
            <IoStar color="#99CC33" />
            <IoStar color="#99CC33" />
            <IoStar color="#99CC33" />
            <IoStar color="#99CC33" />
            <IoStarOutline color="gray" />
          </HStack>
          <HStack gap={3} my={4}>
            <IoShareSocial fontSize="25px" cursor={"pointer"} />
            <FaWhatsapp color="#8BC34A" fontSize="25px" cursor={"pointer"} />
          </HStack>
          <Text mb={3} fontSize={15} color={"#666666"} fontWeight={"500"}>
            SELECT SIZE
          </Text>
          <HStack gap={3}>
            {["S", "M", "L", "XL"].map((el) => (
              <Box
                onClick={() => setSize(el)}
                border={"1px solid #333333"}
                bg={size===el&&'#333333'}
                color={size===el&&'white'}
                borderRadius={"10px"}
                textAlign={"center"}
                _hover={{ color: "red" }}
                cursor={"pointer"}
                fontSize={20}
                h={"35px"}
                w={"35px"}
                lineHeight={'35px'}
              >
                {el}
              </Box>
            ))}
          </HStack>
          <HStack pt={3}>
            <Text w={'110px'} >M.R.P.</Text>
            <Text>:</Text>
            <Text textDecor={'line-through'}> ₹{(singleProduct.price*100/48).toFixed(2)}</Text>
          </HStack>
          <HStack >
            <Text w={'110px'} >Price</Text>
            <Text>:</Text>
            <Text fontSize={18}> ₹{singleProduct.price}</Text>
          </HStack>
          <HStack >
            <Text w={'110px'} >You Save</Text>
            <Text>:</Text>
            <Text color={'#D32A7F'}> ₹{(singleProduct.price*100/48-singleProduct.price).toFixed(2)} (52%)</Text>
          </HStack>
          <Text fontSize={15} color={'gray'} fontWeight={300} py={3}>M.R.P. inclusive of all taxes</Text>
          <Button fontSize={25} p={25} w={'100%'} color={'white'} bg={'#8BC34A'}>ADD TO CART</Button>
          <Text mt={8} fontSize={15} color={"#666666"} fontWeight={"500"}>
            PRODUCT DETAILS
          </Text>
          <UnorderedList p={2} color={'gray'} fontSize={14}>
            <ListItem>Look trendy wearing this top from peptrends and get this awesome collection in white colour.</ListItem>
            <ListItem>Get this top in beautiful prints to flaunt for various occasions.</ListItem>
            <ListItem>Lay your hands on this wonderful collection of tops in regular types to look your best in s size.</ListItem>
            <ListItem>Opt for this top made up of polyester material and get it in a round neck design.</ListItem>
            <ListItem>Oring home attractive tops priced at ₹350 and also avail 72% discount.</ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </Container>
  );
};

export default SingleProduct;
