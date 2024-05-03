import { Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Text, Container, VStack } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Your Dashboard</Text>
        <Menu>
          <MenuButton as={Button} rightIcon={<FaUserCircle />} colorScheme="blue">
            Profile
          </MenuButton>
          <MenuList>
            <MenuItem minH="48px">
              <Text fontSize="md">John Doe</Text>
              <Text fontSize="sm" color="gray.600">
                john.doe@example.com
              </Text>
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => navigate("/home")}>Home</MenuItem>
          </MenuList>
        </Menu>
      </VStack>
    </Container>
  );
};

export default Index;
