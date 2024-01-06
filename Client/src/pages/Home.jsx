import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import HomeCard from "../component/HomeCard";
import PauseOnHover, { Swipe } from "../component/Sliders";
import {
  Center,
  SimpleGrid,
  Button,
  Container,
  Spinner,
  Skeleton,
  Heading,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getHome } from "../Redux/UserReducer/action";

const Home = () => {
  const [limit, setLimit] = useState(6);
  const dispatch = useDispatch();
  const { loading, error, home } = useSelector((store) => store.UserReducer);

  const handleLimit = () => {
    if (limit > 50) {
      setLimit(9);
    } else {
      setLimit((prev) => prev + 3);
    }
  };

  useEffect(() => {
    dispatch(getHome({ params: { page: 1, limit } }));
  }, [limit]);

  return error ? (
    <Heading my={320} color={'red'}>Something bad happened. Please try again !</Heading>
  ) : (
    <Container maxW="1200px">
      <Swipe />
      <PauseOnHover />
      <Center>
        <SimpleGrid
          columns={[1, 1, 2, 3, 3, 3]}
          spacing={[3, 3, 6, 3, 3, 3]}
          my={3}
        >
          {loading
            ? new Array(9).fill(0).map(() => {
                return <Skeleton height={"450px"} w={"380px"} />;
              })
            : home?.map((el) => {
                return (
                  <HomeCard
                    designer={el.designer}
                    followers={el.followers}
                    id={el._id}
                    key={el._id}
                    image={el.image}
                    likes={el.likes}
                    title={el.title}
                  />
                );
              })}
        </SimpleGrid>
      </Center>
      <Center>
        <Button color="#E91E63" onClick={handleLimit} m={3} bg="#FFEBEE">
          {loading ? <Spinner mx={10} /> : "SHOW MORE"}
        </Button>
      </Center>
    </Container>
  );
};

export default Home;
