import { Flex, Box, Text, Avatar } from '@chakra-ui/react';


interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex alignItems="center">
      { showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Victor Ross</Text>
          <Text color="gray.300" fontSize="small">victor2ross@gmail.com</Text>
        </Box>
      ) }
      <Avatar size="md" name="Victor Ross" src="https://avatars.githubusercontent.com/u/78884874?v=4" />
    </Flex>
  );
}