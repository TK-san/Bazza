/**
 * Header Component
 * Top navigation header with app title and actions (Chakra UI v3)
 */
import { Box, Flex, Heading, Text, HStack, IconButton } from '@chakra-ui/react';
import { FaBell, FaSearch } from 'react-icons/fa';
import { useLanguage } from '../../i18n';

const Header = ({ subtitle }) => {
  const { t } = useLanguage();

  return (
    <Box
      position="sticky"
      top={0}
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.100"
      px={4}
      py={3}
      zIndex={50}
    >
      <Flex justify="space-between" align="center">
        {/* Logo and Title */}
        <Box>
          <Heading size="lg" color="blue.500" letterSpacing="-0.5px">
            {t('appName')}
          </Heading>
          {subtitle && (
            <Text fontSize="xs" color="gray.500" mt={-1}>
              {subtitle}
            </Text>
          )}
        </Box>

        {/* Action Buttons */}
        <HStack gap={2}>
          <IconButton
            aria-label="Search"
            variant="ghost"
            borderRadius="full"
            color="gray.600"
            _hover={{ bg: 'gray.100' }}
            size="sm"
          >
            <FaSearch />
          </IconButton>
          <IconButton
            aria-label="Notifications"
            variant="ghost"
            borderRadius="full"
            color="gray.600"
            _hover={{ bg: 'gray.100' }}
            size="sm"
          >
            <FaBell />
          </IconButton>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
