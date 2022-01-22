import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Th, Thead, Tr, Td, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";




export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box>
      <Header />

      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />

        <Box flex="1" borderRadius={8} backgroundColor="gray.800" padding="8">
          <Flex marginBottom="8" justify="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Link href="/users/create" passHref>
              <Button as="a" cursor="pointer" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                Criar novo usuário
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th paddingX={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data de cadastro</Th> }
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td  paddingX={["4", "4", "6"]}><Checkbox colorScheme="pink" /></Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Victor Ross</Text>
                    <Text fontSize="small" color="gray.300">victor2ross@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>12 de Janeiro</Td> }
                <Td>
                  <Button as="a" cursor="pointer" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                    { isWideVersion ? 'Editar' : '' }
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td paddingX={["4", "4", "6"]}><Checkbox colorScheme="pink" /></Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Maura Amili</Text>
                    <Text fontSize="small" color="gray.300">amilimaura@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>25 de Fevereiro</Td> }
                <Td>
                  <Button as="a" cursor="pointer" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                    { isWideVersion ? 'Editar' : '' }
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td paddingX={["4", "4", "6"]}><Checkbox colorScheme="pink" /></Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Renan Lopes</Text>
                    <Text fontSize="small" color="gray.300">renanlopes@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>04 de Abril 2021</Td> }
                <Td>
                  <Button as="a" cursor="pointer" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                    { isWideVersion ? 'Editar' : '' }
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}