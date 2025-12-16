/**
 * CategoryPill Component
 * Horizontal scrollable category filter pills (Chakra UI v3)
 */
import { Box, HStack, Button, Text } from '@chakra-ui/react';
import { useLanguage } from '../../i18n';
import {
  FaThLarge,
  FaBroom,
  FaCar,
  FaWrench,
  FaBook,
  FaUtensils,
  FaLaptop,
  FaBox,
  FaSpa,
} from 'react-icons/fa';

// Map icon names to actual React Icon components
const iconMap = {
  FaThLarge,
  FaBroom,
  FaCar,
  FaWrench,
  FaBook,
  FaUtensils,
  FaLaptop,
  FaBox,
  FaSpa,
};

const CategoryPill = ({ categories, activeCategory, onSelect }) => {
  const { t } = useLanguage();

  return (
    <Box
      overflowX="auto"
      py={3}
      px={4}
      css={{
        '&::-webkit-scrollbar': { display: 'none' },
        scrollbarWidth: 'none',
      }}
    >
      <HStack gap={2} minW="max-content">
        {categories.map((cat) => {
          const IconComponent = iconMap[cat.icon];
          const isActive = activeCategory === cat.id;

          return (
            <Button
              key={cat.id}
              size="sm"
              borderRadius="full"
              px={4}
              bg={isActive ? 'blue.500' : 'white'}
              color={isActive ? 'white' : 'gray.600'}
              boxShadow="sm"
              _hover={{
                bg: isActive ? 'blue.600' : 'gray.100',
              }}
              _active={{
                bg: isActive ? 'blue.700' : 'gray.200',
              }}
              onClick={() => onSelect(cat.id)}
            >
              <Box
                as={IconComponent}
                boxSize={4}
                mr={2}
                color={isActive ? 'white' : cat.color}
              />
              <Text>{t(`categories.${cat.id}`)}</Text>
            </Button>
          );
        })}
      </HStack>
    </Box>
  );
};

export default CategoryPill;
