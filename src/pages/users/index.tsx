import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Th, Thead, Tr, Td, Text, useBreakpointValue, Spinner, Link } from "@chakra-ui/react";
import { useState } from "react";
import NextLink from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { getUsers, useUsers } from "../../services/hooks/useUsers";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";
import { GetServerSideProps } from "next";





export default function UserList() {

  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, error } = useUsers(page);


  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`);

      return response.data;
    }, {
      staleTime: 1000 * 60 * 10
    })
  }


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
            <Heading size="lg" fontWeight="normal">
              Usuários
              { !isLoading && isFetching && <Spinner size="sm" color="gray.500" marginLeft="4"/>  }
            </Heading>

            <NextLink href="/users/create" passHref>
              <Button as="a" cursor="pointer" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                Criar novo usuário
              </Button>
            </NextLink>
          </Flex>

          { isLoading ? (
            <Flex justifyContent="center" >
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justifyContent="center">
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
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
                { data.users.map(user => {
                  return (
                    <Tr key={user.id}>
                      <Td  paddingX={["4", "4", "6"]}><Checkbox colorScheme="pink" /></Td>
                      <Td>
                        <Box>
                          <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)} >
                            <Text fontWeight="bold">{user.name}</Text>
                          </Link>
                          <Text fontSize="small" color="gray.300">{user.email}</Text>
                        </Box>
                      </Td>
                      { isWideVersion && <Td>{user.createdAt}</Td> }
                      <Td>
                        <Button as="a" cursor="pointer" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                          { isWideVersion ? 'Editar' : '' }
                        </Button>
                      </Td>
                    </Tr>
                  );
                }) }
              </Tbody>
            </Table>

            <Pagination totalCountOfRegisters={data.totalCount} currentPage={page} onPageChange={setPage} />
          </>
          ) }
        </Box>
      </Flex>
    </Box>
  );
}