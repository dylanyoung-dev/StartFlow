import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr";
import { PiChats } from "react-icons/pi";
import { SiChakraui, SiNextdotjs } from "react-icons/si";
import { CustomSelect } from "./components/forms/CustomSelect";
import { Option } from "./components/forms/Option";

function App() {
  const [colorMode, setColorMode] = useState<string | null | undefined>();
  return (
    <>
      <Box as="section" minH="md" w="5xl" m="auto">
        <Box borderBottomWidth="1px" bg="bg.surface" w="5xl">
          <Container py="4" maxW="none" w="full">
            <HStack justify="space-between" w="full">
              <HStack direction="column" spacing={2} w="300px">
                <PiChats fontSize="36px" />
                <Text fontSize="md" fontWeight="bold">
                  AI Generator
                </Text>
              </HStack>
              <Stack direction="row" spacing={2} align="center">
                <Text fontSize="md">Beta v0.0.1</Text>
                <IconButton aria-label="Learn More" icon={<BsInfoCircle />} />
                <Button
                  leftIcon={<GrDeploy />}
                  colorScheme="blue"
                  disabled={true}
                >
                  Deploy
                </Button>
              </Stack>
            </HStack>
          </Container>
        </Box>
        <Box w="full">
          <Container py="4" maxW="none" w="full">
            <Stack direction="column" spacing="4">
              <Heading as="h1" size="xs">
                Configure Your Website
              </Heading>
              <Stack direction="row" spacing={2}>
                TODO: Add Source Control configuration for easier deployments
                <FormControl id="framework">
                  <FormLabel>Framework</FormLabel>
                  <CustomSelect
                    name="Framework"
                    colorScheme="blue"
                    value={colorMode}
                    onChange={setColorMode}
                    placeholder="Select a Framework"
                  >
                    <Option value="light">
                      <HStack>
                        <SiNextdotjs boxSize="24px" />
                        <Text>Next.js</Text>
                      </HStack>
                    </Option>
                  </CustomSelect>
                </FormControl>
                <FormControl id="design">
                  <FormLabel>Design System</FormLabel>
                  <CustomSelect
                    name="ColorMode"
                    colorScheme="blue"
                    value={colorMode}
                    onChange={setColorMode}
                    placeholder="Select a Design System"
                  >
                    <Option value="light">
                      <HStack>
                        <SiChakraui boxSize="24px" />
                        <Text>Chakra UI</Text>
                      </HStack>
                    </Option>
                  </CustomSelect>
                </FormControl>
              </Stack>
              <Heading as="h2" size="xs">
                Describe Your Website
              </Heading>
              <Textarea
                rows={8}
                placeholder="Describe your website that you'd like to build?  Be as detailed as possible."
              />
              <Button colorScheme="blue">Generate</Button>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default App;
