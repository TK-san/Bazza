/**
 * RequestsLandingPage
 * Landing page showing service categories for Requests tab
 */
import { Box, VStack, Text, Heading, SimpleGrid } from '@chakra-ui/react';
import {
  FaBroom,
  FaCar,
  FaWrench,
  FaBook,
  FaUtensils,
  FaLaptop,
  FaBox,
  FaSpa,
} from 'react-icons/fa';
import { useLanguage } from '../i18n';
import { categories, mockRequests } from '../data/mockServices';

const iconMap = {
  cleaning: FaBroom,
  transport: FaCar,
  repair: FaWrench,
  tutoring: FaBook,
  cooking: FaUtensils,
  tech: FaLaptop,
  errands: FaBox,
  beauty: FaSpa,
};

const colorMap = {
  cleaning: { bg: 'green.50', icon: 'green.500', hover: 'green.100' },
  transport: { bg: 'purple.50', icon: 'purple.500', hover: 'purple.100' },
  repair: { bg: 'orange.50', icon: 'orange.500', hover: 'orange.100' },
  tutoring: { bg: 'teal.50', icon: 'teal.500', hover: 'teal.100' },
  cooking: { bg: 'red.50', icon: 'red.500', hover: 'red.100' },
  tech: { bg: 'cyan.50', icon: 'cyan.500', hover: 'cyan.100' },
  errands: { bg: 'yellow.50', icon: 'yellow.600', hover: 'yellow.100' },
  beauty: { bg: 'pink.50', icon: 'pink.500', hover: 'pink.100' },
};

const CategoryCard = ({ category, count, onClick, t }) => {
  const Icon = iconMap[category.id];
  const colors = colorMap[category.id];

  if (!Icon || !colors) return null;

  return (
    <Box
      bg={colors.bg}
      borderRadius="xl"
      p={4}
      cursor="pointer"
      transition="all 0.2s"
      _hover={{ bg: colors.hover, transform: 'scale(1.02)' }}
      _active={{ transform: 'scale(0.98)' }}
      onClick={onClick}
      boxShadow="sm"
    >
      <VStack gap={2} align="center">
        <Box
          as={Icon}
          boxSize={8}
          color={colors.icon}
        />
        <Text
          fontSize="sm"
          fontWeight="semibold"
          color="gray.700"
          textAlign="center"
        >
          {t(`categories.${category.id}`)}
        </Text>
        <Text fontSize="xs" color="gray.500">
          {count} {t('requests.requestsCount')}
        </Text>
      </VStack>
    </Box>
  );
};

const RequestsLandingPage = ({ onSelectCategory }) => {
  const { t } = useLanguage();

  // Filter out 'all' category and count requests per category
  const categoryList = categories.filter((cat) => cat.id !== 'all');

  const getCategoryCount = (categoryId) => {
    return mockRequests.filter((request) => request.category === categoryId).length;
  };

  const totalRequests = mockRequests.length;

  return (
    <Box
      h="calc(100vh - 140px)"
      overflowY="auto"
      bg="gray.50"
    >
      {/* Header */}
      <Box px={4} pt={6} pb={4} bg="white">
        <Heading size="lg" color="gray.800" mb={1}>
          {t('requests.title')}
        </Heading>
        <Text fontSize="sm" color="gray.500">
          {t('requests.subtitle')} - {totalRequests} {t('requests.requestsCount')}
        </Text>
      </Box>

      {/* Browse All Button */}
      <Box px={4} py={3}>
        <Box
          bg="green.500"
          borderRadius="xl"
          p={4}
          cursor="pointer"
          transition="all 0.2s"
          _hover={{ bg: 'green.600' }}
          _active={{ transform: 'scale(0.98)' }}
          onClick={() => onSelectCategory('all')}
          boxShadow="md"
        >
          <VStack gap={1}>
            <Text
              fontSize="md"
              fontWeight="bold"
              color="white"
            >
              {t('categories.all')} {t('requests.requestsCount')}
            </Text>
            <Text fontSize="sm" color="green.100">
              {totalRequests} {t('requests.requestsCount')}
            </Text>
          </VStack>
        </Box>
      </Box>

      {/* Category Grid */}
      <Box px={4} pb={8}>
        <Text fontSize="sm" fontWeight="semibold" color="gray.600" mb={3}>
          {t('requests.browseByCategory')}
        </Text>
        <SimpleGrid columns={2} gap={3}>
          {categoryList.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              count={getCategoryCount(category.id)}
              onClick={() => onSelectCategory(category.id)}
              t={t}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default RequestsLandingPage;
