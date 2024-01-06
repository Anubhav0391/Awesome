import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SideBar = ({ setBrand, setOrder }) => {
  return (
    <Box bg={'white'} h={'87vh'} w={'250px'} p={5} position={'fixed'} zIndex={1} left={'30px'} top={'90px'}>
      <Text fontSize={28} m={3} fontWeight={500}>Filter & Sort</Text>
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
  );
};

export default SideBar;
