import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

let initialValue = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Address = () => {
  const { loading,token } = useSelector((store) => store.UserReducer);
  const [formValues, setFormValues] = useState(initialValue);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(initialValue);

    dispatch();
  };

  return (
    <Box w={{ base: "100%", xl: "50vw" }} >
      <form onSubmit={handleSubmit}>
        <Stack spacing="5">
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
            Save Address
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Address;
