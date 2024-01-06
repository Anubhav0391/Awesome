import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SideBar = ({ setBrand, setOrder }) => {
  const [deg, setDeg] = useState('-250px');

  return (
    <>
      <Button
        onClick={() => setDeg('0px')}
        display={[deg==='-250px'?"block":'none', deg==='-250px'?"block":'none', deg==='-250px'?"block":'none', "none", "none", "none"]}
        letterSpacing={2}
        bg={"white"}
        bottom={0}
        zIndex={1}
        position={"fixed"}
        left={0}
        right={0}
        borderRadius={0}
        fontSize={"20px"}
      >
        Filter & Sort
      </Button>
      <Box
        bg={"white"}
        w={"250px"}
        p={5}
        position={"fixed"}
        transition={'left 0.3s'}
        zIndex={1}
        left={[deg,deg,deg,'30px','30px','30px']}
        top={['70px','70px','70px','90px','90px','90px']}
        bottom={['0px','0px','0px','20px','20px','20px']}
      >
        <Text fontSize={28} m={3} fontWeight={500}>
          Filter & Sort
        </Text>
        <Text
          display={["block", "block", "block", "none", "none", "none"]}
          pos={"absolute"}
          top={1}
          right={1}
          onClick={() => setDeg('-250px')}
          fontSize={28}
        >
          ×
        </Text>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Brand
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <input
                type="radio"
                id="one"
                name="brand"
                value="Fashion Fricks"
                onChange={(e) => setBrand(e.target.value)}
              />
              <label for="one">Fashion Fricks</label>
              <br />
              <input
                type="radio"
                id="two"
                name="brand"
                value="Oxolloxo"
                onChange={(e) => setBrand(e.target.value)}
              />
              <label for="two">Oxolloxo</label>
              <br />
              <input
                type="radio"
                id="three"
                name="brand"
                value="GESPO"
                onChange={(e) => setBrand(e.target.value)}
              />
              <label for="three">GESPO</label>
              <br />
              <input
                type="radio"
                id="four"
                name="brand"
                value="ZAVLIN"
                onChange={(e) => setBrand(e.target.value)}
              />
              <label for="four">ZAVLIN</label>
              <br />
              <input
                type="radio"
                id="five"
                name="brand"
                value="Solemio"
                onChange={(e) => setBrand(e.target.value)}
              />
              <label for="five">Solemio</label>
              <br />
              <input
                type="radio"
                id="six"
                name="brand"
                value="Allen Kniel"
                onChange={(e) => setBrand(e.target.value)}
              />
              <label for="six">Allen Kniel</label>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Price
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <input
                type="radio"
                id="asce"
                name="age"
                value="asc"
                onChange={(e) => setOrder(e.target.value)}
              />
              <label for="asce">Low to High</label>
              <br />
              <input
                type="radio"
                id="desc"
                name="age"
                value="desc"
                onChange={(e) => setOrder(e.target.value)}
              />
              <label for="desc">High to Low</label>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Category
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Print & Patterns
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Occassion
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

export default SideBar;
