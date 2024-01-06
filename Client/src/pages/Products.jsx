import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import {
  Center,
  Text,
  SimpleGrid,
  Button,
  Container,
  Skeleton,
  Spinner,
  Box,
  Heading,
} from "@chakra-ui/react";
import SideBar from "../component/SideBar";
import { getProduct } from "../Redux/UserReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Products = ({gender}) => {
  const [limit, setLimit] = useState(9);
  const [order, setOrder] = useState("");
  const [brand, setBrand] = useState("");
  const dispatch=useDispatch()
  const { loading, error, products } = useSelector(
    (store) => store.UserReducer
  );
  const [searchParams,setSearchParams]=useSearchParams()

  useEffect(() => {
    const params={ page: 1, limit }
    
    if(gender){
      params.gender=gender;
    }

    if(searchParams.get('search')){
      params.search=searchParams.get('search');
    }

    if(order){
      params.sort='price';
      params.order=order
    }

    if(brand){
      params.brand=brand
    }

    dispatch(
      getProduct({
        params,
      })
    );
  }, [limit, order, brand,gender,searchParams.get('search')]);

  const handleLimit = () => {
    if (limit > 100) {
      setLimit(9);
    } else {
      setLimit((prev) => prev + 3);
    }
  };

  return error ? (
    <Heading my={320} color={"red"}>
      Something bad happened. Please try again !
    </Heading>
  ) : (
    <Container maxW="90vw">
      <SideBar setBrand={setBrand} setOrder={setOrder} />
      <Box ml={[0,0,0,'250px','250px','250px']}>
        <Text color={"gray"} fontSize="14" marginBottom={5}>
          Home » {gender=='male'?"Men":"Women"} » clothing » top wear
        </Text>
        <SimpleGrid columns={[1, 2, 2, 2, 3, 3]} spacing={[3, 3, 5, 5, 5, 5]}>
          {loading
            ? new Array(9).fill(0).map(() => {
                return <Skeleton height={"500px"} width={"380px"} />;
              })
            : products?.map((el) => {
                return (
                  <ProductCard
                    title={el.title}
                    brand={el.brand}
                    id={el._id}
                    key={el._id}
                    price={el.price}
                    img1={el.img1}
                    img2={el.img2}
                    img3={el.img3}
                  />
                );
              })}
        </SimpleGrid>
      </Box>
      <Center>
        <Button color="#E91E63" onClick={handleLimit} m={3} bg="#FFEBEE">
          {loading ? <Spinner mx={10} /> : "SHOW MORE"}
        </Button>
      </Center>
    </Container>
  );
};

export default Products;
