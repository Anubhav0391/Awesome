import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Center,
  Input,
  Stack,
  Link,
  useToast,
  Img,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import signupheader from "../Images/signupheader.jpeg";
import loginheader from "../Images/loginheader.PNG";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../Redux/UserReducer/action";

let initialValue = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const { route } = useParams();
  const toast = useToast();
  const { loading } = useSelector((store) => store.UserReducer);
  const [formValues, setFormValues] = useState(initialValue);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const createAlert = (status, title) => {
    toast({
      position: "top",
      title,
      status,
      duration: 1000,
      isClosable: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(initialValue);

    if (formValues.password !== formValues.confirmPassword) {
      createAlert("error", "Passwords do not match !");
      return;
    }

    dispatch(authenticate(formValues, route, createAlert));
  };

  return (
    <Box mx="auto" w={{ base: "80%", md: "30%" }} my={"48px"}>
      <form onSubmit={handleSubmit}>
        <Stack spacing="5">
          <Img src={route === "register" ? signupheader : loginheader} />
          {route === "register" && (
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name:</FormLabel>
              <Input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </FormControl>
          )}
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="confirmPassword">Confirm Password:</FormLabel>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
          </FormControl>
          <Button
            type="submit"
            isLoading={loading}
            background="linear-gradient(to right,rgb(234, 63, 92), rgb(147, 7, 147))"
            color={"white"}
          >
            {route === "login" ? "Sign In" : "Sign Up"}
          </Button>
          <Center>
            <Link
              color={"#84c225"}
              textDecoration={"none"}
              href={route === "login" ? "/auth/register" : "/auth/login"}
              textAlign="center"
              cursor={"pointer"}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
            >
              {route === "login" ? "Register" : "Login"}
            </Link>
          </Center>
        </Stack>
      </form>
    </Box>
  );
};

export default Auth;
