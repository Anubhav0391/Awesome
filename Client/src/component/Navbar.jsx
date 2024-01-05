import logo from "../Images/awesome logo.png";
import profile from "../Images/profile.PNG";
import cart from "../Images/bag.PNG";
import search from "../Images/search.PNG";
import "../styles/navbar.css";
import React, { useContext, useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Tag,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  HStack,
  Input,
  IconButton,
  Text,
  Box,
  Popover,
  PopoverTrigger,
  Button,
  Portal,
  PopoverContent,
  PopoverHeader,
  Heading,
  PopoverBody,
  PopoverFooter,
  Img,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="wrapper">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="fas fa-times"></i>
            </label>
            <li>
              <Link>
                <a href="#" className="desktop-item">
                  WOMEN
                </a>
                <input type="checkbox" id="showMega" />
                <label htmlFor="showMega" className="mobile-item">
                  WOMEN
                </label>
              </Link>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <Tag h={10}>
                          <a href="#">Ethintic Wear</a>
                        </Tag>
                      </li>
                      <li>
                        <a href="#">Kurta Kurtis</a>
                      </li>
                      <li>
                        <a href="#">Sarees</a>
                      </li>
                      <li>
                        <a href="#">Ethnic Sets</a>
                      </li>
                      <li>
                        <a href="#">Suits & Dress Materials</a>
                      </li>
                      <li>
                        <a href="#">Lehengas</a>
                      </li>
                      <li>
                        <a href="#">Blouses</a>
                      </li>
                      <li>
                        <a href="#">Dupattas</a>
                      </li>
                      <li>
                        <a href="#">Ethnic Dresses</a>
                      </li>
                      <li>
                        <Tag h={10}>
                          <a href="#">Bags & Wallets</a>
                        </Tag>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <Tag h={10}>
                          <a href="#">Western Wear</a>
                        </Tag>
                      </li>
                      <li>
                        <a href="#">Tops</a>
                      </li>
                      <li>
                        <a href="#">Dresses</a>
                      </li>
                      <li>
                        <a href="#">Tees</a>
                      </li>
                      <li>
                        <a href="#">Suits & Dress Materials</a>
                      </li>
                      <li>
                        <a href="#">Shirts</a>
                      </li>
                      <li>
                        <a href="#">Blouses</a>
                      </li>
                      <li>
                        <a href="#">Tunics</a>
                      </li>
                      <li>
                        <a href="#">Jumpsuits</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <Tag h={10}>
                          <a href="#">Activewear</a>
                        </Tag>
                      </li>
                      <li>
                        <a href="#">Swim Wear</a>
                      </li>
                      <li>
                        <a href="#">Topwear</a>
                      </li>
                      <li>
                        <a href="#">Bottomwear</a>
                      </li>
                      <li>
                        <a href="#">Suits & Dress Materials</a>
                      </li>
                      <li>
                        <a href="#">Lehengas</a>
                      </li>
                      <li>
                        <a href="#">Blouses</a>
                      </li>
                      <li>
                        <a href="#">Dupattas</a>
                      </li>
                      <li>
                        <Tag h={10}>
                          <a href="#">Belts & Watches</a>
                        </Tag>
                      </li>
                      <li>
                        <Tag h={10}>
                          <a href="#">Sunglasses & Hats</a>
                        </Tag>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <Tag h={10}>
                          <a href="#">Jewellery</a>
                        </Tag>
                      </li>
                      <li>
                        <a href="#">Fashion Jewellery</a>
                      </li>
                      <li>
                        <a href="#">Imitation Jewellery</a>
                      </li>
                      <li>
                        <a href="#">Earrings</a>
                      </li>
                      <li>
                        <Tag h={10}>
                          <a href="#">Footwear</a>
                        </Tag>
                      </li>
                      <li>
                        <a href="#">Flats</a>
                      </li>
                      <li>
                        <a href="#">Heels</a>
                      </li>
                      <li>
                        <a href="#">Casual Shoes</a>
                      </li>
                      <li>
                        <a href="#">Flip Flops</a>
                      </li>
                      <li>
                        <a href="#">Heels</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <Tag h={10}>
                          <a href="#">Brands</a>
                        </Tag>
                      </li>
                      <li>
                        <a href="#">Karigari</a>
                      </li>
                      <li>
                        <a href="#">Aurelia</a>
                      </li>
                      <li>
                        <a href="#">Alcis</a>
                      </li>
                      <li>
                        <a href="#">Shaily</a>
                      </li>
                      <li>
                        <a href="#">Cottinfab</a>
                      </li>
                      <li>
                        <a href="#">Ksut</a>
                      </li>
                      <li>
                        <a href="#">Oxolloxo</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/mens">
                <a href="#" className="desktop-item">
                  MEN
                </a>
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                <Link to="/mens">MEN</Link>
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <Tag h={10}>
                          <a href="#">Ethintic Wear</a>
                        </Tag>
                      </li>
                      <li>
                        <a href="#">Kurta Kurtis</a>
                      </li>
                      <li>
                        <a href="#">Sarees</a>
                      </li>
                      <li>
                        <a href="#">Ethnic Sets</a>
                      </li>
                      <li>
                        <a href="#">Suits & Dress Materials</a>
                      </li>
                      <li>
                        <a href="#">Lehengas</a>
                      </li>
                      <li>
                        <a href="#">Blouses</a>
                      </li>
                      <li>
                        <a href="#">Dupattas</a>
                      </li>
                      <li>
                        <a href="#">Ethnic Dresses</a>
                      </li>
                      <li>
                        <Tag h={10}>
                          <a href="#">Bags & Wallets</a>
                        </Tag>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <Tag h={10}>
                          <a href="#">Western Wear</a>
                        </Tag>
                      </li>
                      <li>
                        <a href="#">Tops</a>
                      </li>
                      <li>
                        <a href="#">Dresses</a>
                      </li>
                      <li>
                        <a href="#">Tees</a>
                      </li>
                      <li>
                        <a href="#">Suits & Dress Materials</a>
                      </li>
                      <li>
                        <a href="#">Shirts</a>
                      </li>
                      <li>
                        <a href="#">Blouses</a>
                      </li>
                      <li>
                        <a href="#">Tunics</a>
                      </li>
                      <li>
                        <a href="#">Jumpsuits</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <Tag h={10}>
                          <a href="#">Activewear</a>
                        </Tag>
                      </li>
                      <li>
                        <a href="#">Swim Wear</a>
                      </li>
                      <li>
                        <a href="#">Topwear</a>
                      </li>
                      <li>
                        <a href="#">Bottomwear</a>
                      </li>
                      <li>
                        <a href="#">Suits & Dress Materials</a>
                      </li>
                      <li>
                        <a href="#">Lehengas</a>
                      </li>
                      <li>
                        <a href="#">Blouses</a>
                      </li>
                      <li>
                        <a href="#">Dupattas</a>
                      </li>
                      <li>
                        <Tag h={10}>
                          <a href="#">Belts & Watches</a>
                        </Tag>
                      </li>
                      <li>
                        <Tag h={10}>
                          <a href="#">Sunglasses & Hats</a>
                        </Tag>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <Tag h={10}>
                          <a href="#">Jewellery</a>
                        </Tag>
                      </li>
                      <li>
                        <a href="#">Fashion Jewellery</a>
                      </li>
                      <li>
                        <a href="#">Imitation Jewellery</a>
                      </li>
                      <li>
                        <a href="#">Earrings</a>
                      </li>
                      <li>
                        <Tag h={10}>
                          <a href="#">Footwear</a>
                        </Tag>
                      </li>
                      <li>
                        <a href="#">Flats</a>
                      </li>
                      <li>
                        <a href="#">Heels</a>
                      </li>
                      <li>
                        <a href="#">Casual Shoes</a>
                      </li>
                      <li>
                        <a href="#">Flip Flops</a>
                      </li>
                      <li>
                        <a href="#">Heels</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <Tag h={10}>
                          <a href="#">Brands</a>
                        </Tag>
                      </li>
                      <li>
                        <a href="#">Karigari</a>
                      </li>
                      <li>
                        <a href="#">Aurelia</a>
                      </li>
                      <li>
                        <a href="#">Alcis</a>
                      </li>
                      <li>
                        <a href="#">Shaily</a>
                      </li>
                      <li>
                        <a href="#">Cottinfab</a>
                      </li>
                      <li>
                        <a href="#">Ksut</a>
                      </li>
                      <li>
                        <a href="#">Oxolloxo</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link>
                <a
                  href="#"
                  className="desktop-item"
                  style={{ marginRight: "23px" }}
                >
                  KIDS
                </a>
                <input type="checkbox" id="showMega" />
                <label htmlFor="showMega" className="mobile-item">
                  KIDS
                </label>
              </Link>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <Tag h={10}>
                          <a href="#">Ethintic Wear</a>
                        </Tag>
                      </li>
                      <li>
                        <a href="#">Kurta Kurtis</a>
                      </li>
                      <li>
                        <a href="#">Sarees</a>
                      </li>
                      <li>
                        <a href="#">Ethnic Sets</a>
                      </li>
                      <li>
                        <a href="#">Suits & Dress Materials</a>
                      </li>
                      <li>
                        <a href="#">Lehengas</a>
                      </li>
                      <li>
                        <a href="#">Blouses</a>
                      </li>
                      <li>
                        <a href="#">Dupattas</a>
                      </li>
                      <li>
                        <a href="#">Ethnic Dresses</a>
                      </li>
                      <li>
                        <Tag h={10}>
                          <a href="#">Bags & Wallets</a>
                        </Tag>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <Tag h={10}>
                          <a href="#">Western Wear</a>
                        </Tag>
                      </li>
                      <li>
                        <a href="#">Tops</a>
                      </li>
                      <li>
                        <a href="#">Dresses</a>
                      </li>
                      <li>
                        <a href="#">Tees</a>
                      </li>
                      <li>
                        <a href="#">Suits & Dress Materials</a>
                      </li>
                      <li>
                        <a href="#">Shirts</a>
                      </li>
                      <li>
                        <a href="#">Blouses</a>
                      </li>
                      <li>
                        <a href="#">Tunics</a>
                      </li>
                      <li>
                        <a href="#">Jumpsuits</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <Tag h={10}>
                          <a href="#">Activewear</a>
                        </Tag>
                      </li>
                      <li>
                        <a href="#">Swim Wear</a>
                      </li>
                      <li>
                        <a href="#">Topwear</a>
                      </li>
                      <li>
                        <a href="#">Bottomwear</a>
                      </li>
                      <li>
                        <a href="#">Suits & Dress Materials</a>
                      </li>
                      <li>
                        <a href="#">Lehengas</a>
                      </li>
                      <li>
                        <a href="#">Blouses</a>
                      </li>
                      <li>
                        <a href="#">Dupattas</a>
                      </li>
                      <li>
                        <Tag h={10}>
                          <a href="#">Belts & Watches</a>
                        </Tag>
                      </li>
                      <li>
                        <Tag h={10}>
                          <a href="#">Sunglasses & Hats</a>
                        </Tag>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <Tag h={10}>
                          <a href="#">Jewellery</a>
                        </Tag>
                      </li>
                      <li>
                        <a href="#">Fashion Jewellery</a>
                      </li>
                      <li>
                        <a href="#">Imitation Jewellery</a>
                      </li>
                      <li>
                        <a href="#">Earrings</a>
                      </li>
                      <li>
                        <Tag h={10}>
                          <a href="#">Footwear</a>
                        </Tag>
                      </li>
                      <li>
                        <a href="#">Flats</a>
                      </li>
                      <li>
                        <a href="#">Heels</a>
                      </li>
                      <li>
                        <a href="#">Casual Shoes</a>
                      </li>
                      <li>
                        <a href="#">Flip Flops</a>
                      </li>
                      <li>
                        <a href="#">Heels</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <Tag h={10}>
                          <a href="#">Brands</a>
                        </Tag>
                      </li>
                      <li>
                        <a href="#">Karigari</a>
                      </li>
                      <li>
                        <a href="#">Aurelia</a>
                      </li>
                      <li>
                        <a href="#">Alcis</a>
                      </li>
                      <li>
                        <a href="#">Shaily</a>
                      </li>
                      <li>
                        <a href="#">Cottinfab</a>
                      </li>
                      <li>
                        <a href="#">Ksut</a>
                      </li>
                      <li>
                        <a href="#">Oxolloxo</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link>
                <Text
                  fontWeight={600}
                  fontSize={19}
                  cursor="pointer"
                  bgGradient="linear(to-l, #7928CA, #FF0080)"
                  bgClip="text"
                  marginLeft={5}
                >
                  OFFERS
                </Text>
              </Link>
            </li>
            <li>
              <Box w={[0, 0, 100, 150, 450, 450]} />
            </li>
            <li>
              <button color="blue" onClick={onOpen}>
                <img
                  className="icon"
                  src={search}
                  alt=""
                  style={{ width: "60px", marginTop: "30px" }}
                />
                <label
                  style={{ marginLeft: "20px" }}
                  htmlFor="search"
                  className="mobile-item"
                >
                  SEARCH
                </label>
              </button>
              <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent h="70px">
                  <DrawerBody>
                    <HStack>
                      <Input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        variant="unstyled"
                        placeholder="Search brand, category or products"
                        h={"54px"}
                        fontSize="20px"
                      />
                      <IconButton
                        h={"54px"}
                        w={"69px"}
                        bg="#8BC34A"
                        color="white"
                        aria-label="Search database"
                        icon={<SearchIcon fontSize={"2xl"} />}
                      />
                    </HStack>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </li>
            <li>
              <Link to="/cart">
                <img
                  className="icon"
                  src={cart}
                  alt=""
                  style={{ width: "77px", margin: "17px", cursor: "pointer" }}
                />
                <label className="mobile-item">CART</label>
              </Link>
            </li>

            <Popover trigger="hover">
              <PopoverTrigger>
                <li>
                  <Img
                    cursor="pointer"
                    className="icon"
                    src={profile}
                    alt=""
                    style={{ width: "60px", margin: "15px" }}
                  />
                  <label className="mobile-item" style={{paddingLeft:'40px'}}>PROFILE</label>
                </li>
              </PopoverTrigger>

              <Portal>
                <PopoverContent border="none" p={5} mt={-5}>
                  <PopoverHeader>
                    <Heading my={2} fontSize={16}>
                      WELCOME
                    </Heading>
                    <Text my={2}>To view account details</Text>
                    <Button
                      fontSize={14}
                      my={1}
                      colorScheme="white"
                      bgGradient="linear(to-r, rgb(234, 63, 92), rgb(147, 7, 147))"
                    >
                      LOGIN
                    </Button>
                  </PopoverHeader>
                  <PopoverBody>
                    <Text my={2} fontWeight="300" fontSize={15}>
                      ORDERS
                    </Text>
                    <Text my={2} fontWeight="300" fontSize={15}>
                      RETURN REPLACEMENTS
                    </Text>
                    <Text my={2} fontWeight="300" fontSize={15}>
                      LR CREDITS
                    </Text>
                  </PopoverBody>
                  <PopoverFooter>
                    <Text my={2} fontWeight="300" fontSize={15}>
                      COSTUMOR SUPPORT
                    </Text>
                    <Text my={2} fontWeight="300" fontSize={15}>
                      FAQ & HELP
                    </Text>
                  </PopoverFooter>
                  <PopoverFooter>
                    <Box
                      color="white"
                      bg="gray"
                      fontSize={13}
                      borderRadius={12}
                      w="fit-content"
                      p={"5px 10px"}
                    >
                      हिन्दी
                    </Box>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
          </ul>

          <label htmlFor="menu-btn" className="btn menu-btn">
            <i className="fas fa-bars"></i>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
