import { Flex } from '@chakra-ui/react';

import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';


export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      height="20"
      maxWidth={1480}
      marginX="auto"
      marginTop="4"
      paddingX="6"
      alignItems="center"
    >
      <Logo />
      <SearchBox />
      <Flex alignItems="center" marginLeft="auto" >
        <NotificationsNav />
        <Profile /> 
      </Flex>
    </Flex>
  );
}