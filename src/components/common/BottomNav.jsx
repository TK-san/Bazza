/**
 * BottomNav Component
 * Mobile bottom navigation bar with two main tabs (Chakra UI v3)
 */
import { Box, HStack, Text, Flex } from '@chakra-ui/react';
import { FaHandHoldingHeart, FaHandsHelping, FaUser } from 'react-icons/fa';
import { useLanguage } from '../../i18n';

const BottomNav = ({ activeTab, onTabChange }) => {
  const { t } = useLanguage();

  const tabs = [
    {
      id: 'offers',
      labelKey: 'nav.offers',
      icon: FaHandHoldingHeart,
      activeColor: 'green.500',
    },
    {
      id: 'requests',
      labelKey: 'nav.requests',
      icon: FaHandsHelping,
      activeColor: 'orange.500',
    },
    {
      id: 'profile',
      labelKey: 'nav.profile',
      icon: FaUser,
      activeColor: 'gray.600',
    },
  ];

  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      bg="white"
      borderTop="1px solid"
      borderColor="gray.200"
      boxShadow="0 -4px 6px -1px rgba(0, 0, 0, 0.1)"
      pb="env(safe-area-inset-bottom)"
      zIndex={100}
    >
      <HStack gap={0} h="70px">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <Flex
              key={tab.id}
              flex={1}
              direction="column"
              align="center"
              justify="center"
              cursor="pointer"
              py={2}
              transition="all 0.2s"
              bg={activeTab === tab.id ? 'gray.50' : 'transparent'}
              onClick={() => onTabChange(tab.id)}
            >
              <Box
                as={IconComponent}
                boxSize={6}
                color={activeTab === tab.id ? tab.activeColor : 'gray.400'}
                mb={1}
              />
              <Text
                fontSize="xs"
                fontWeight={activeTab === tab.id ? 'bold' : 'medium'}
                color={activeTab === tab.id ? 'gray.800' : 'gray.500'}
              >
                {t(tab.labelKey)}
              </Text>
            </Flex>
          );
        })}
      </HStack>
    </Box>
  );
};

export default BottomNav;
