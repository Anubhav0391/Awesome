import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import HomeCard from "../component/HomeCard";
// import InfiniteScroll from 'react-infinite-scroll-component'
import PauseOnHover, { Swipe } from "../component/Sliders";
// import AvatarRow from "../component/Avatar";
import axios from "axios";
import {
  Center,
  SimpleGrid,
  Button,
  Container,
  Spinner,
  Skeleton,
} from "@chakra-ui/react";

const Home = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(6);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);

    axios
      .get(`https://weak-gold-gazelle-suit.cyclic.app?limit=${limit}&page=1`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  };

  const handleLimit = () => {
      if (limit > 50) {
        setLimit(9);
      } else {
        setLimit((prev) => prev + 3);
      }
  };

  useEffect(() => {
    getData();
  }, [limit]);

  return (
    <Container maxW="950px">
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
                return <Skeleton height={"350px"} width={"300px"} />;
              })
            : data?.map((el) => {
                return (
                  <HomeCard
                    designer={el.designer}
                    followers={el.followers}
                    id={el.id}
                    key={el.id}
                    image={el.image}
                    likes={el.likes}
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
