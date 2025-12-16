/**
 * ServiceCard Component
 * Displays a service offer in card format (Chakra UI v3)
 */
import { Box, Heading, Text, HStack, VStack, Badge, Flex, IconButton } from '@chakra-ui/react';
import { FaStar, FaMapMarkerAlt, FaClock, FaHeart, FaRegHeart, FaThLarge, FaBroom, FaCar, FaWrench, FaBook, FaUtensils, FaLaptop, FaBox, FaSpa } from 'react-icons/fa';
import { useLanguage } from '../../i18n';

// Map location IDs to translation keys
const locationKeyMap = {
  'all': 'allLocations',
  'kl': 'kl',
  'pj': 'pj',
  'subang': 'subang',
  'shah-alam': 'shahAlam',
  'cheras': 'cheras',
  'bangsar': 'bangsar',
  'mont-kiara': 'montKiara',
  'damansara': 'damansara',
  'setapak': 'setapak',
  'putrajaya': 'putrajaya',
  'ampang': 'ampang',
  'kepong': 'kepong',
};

// Map category to icon and color
const categoryIconMap = {
  all: { icon: FaThLarge, color: 'blue.500', bg: 'blue.100' },
  cleaning: { icon: FaBroom, color: 'green.500', bg: 'green.100' },
  transport: { icon: FaCar, color: 'purple.500', bg: 'purple.100' },
  repair: { icon: FaWrench, color: 'orange.500', bg: 'orange.100' },
  tutoring: { icon: FaBook, color: 'teal.500', bg: 'teal.100' },
  cooking: { icon: FaUtensils, color: 'red.500', bg: 'red.100' },
  tech: { icon: FaLaptop, color: 'cyan.500', bg: 'cyan.100' },
  errands: { icon: FaBox, color: 'yellow.600', bg: 'yellow.100' },
  beauty: { icon: FaSpa, color: 'pink.500', bg: 'pink.100' },
};

const ServiceCard = ({ service, onClick, isFavorite, onToggleFavorite }) => {
  const { t } = useLanguage();
  const { titleKey, descriptionKey, price, provider, locationId, availabilityKey, category } = service;

  const categoryInfo = categoryIconMap[category] || categoryIconMap.all;
  const CategoryIcon = categoryInfo.icon;

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Prevent card click
    if (onToggleFavorite) {
      onToggleFavorite();
    }
  };

  return (
    <Box
      bg="white"
      borderRadius="xl"
      boxShadow="md"
      mb={4}
      mx={4}
      p={4}
      cursor="pointer"
      transition="all 0.2s"
      _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
      _active={{ transform: 'scale(0.98)' }}
      onClick={onClick}
      position="relative"
    >
      {/* Favorite Button */}
      <IconButton
        aria-label={isFavorite ? t('cards.removeFromFavorites') : t('cards.addToFavorites')}
        position="absolute"
        top={3}
        right={3}
        size="sm"
        variant="ghost"
        borderRadius="full"
        color={isFavorite ? 'red.500' : 'gray.400'}
        _hover={{ bg: isFavorite ? 'red.50' : 'gray.100' }}
        onClick={handleFavoriteClick}
        zIndex={2}
      >
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </IconButton>

      {/* Header: Category Icon and Provider Info */}
      <Flex justify="space-between" align="start" mb={3} pr={8}>
        <HStack gap={3}>
          <Box
            w={12}
            h={12}
            borderRadius="xl"
            bg={categoryInfo.bg}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box as={CategoryIcon} color={categoryInfo.color} boxSize={6} />
          </Box>
          <VStack align="start" gap={0}>
            <Text fontWeight="semibold" fontSize="sm">{provider.name}</Text>
            <HStack gap={1}>
              <Box as={FaStar} color="yellow.400" boxSize={3} />
              <Text fontSize="xs" color="gray.600">
                {provider.rating} • {provider.completedJobs} {t('cards.jobs')}
              </Text>
            </HStack>
          </VStack>
        </HStack>
        <Badge
          colorPalette="green"
          borderRadius="full"
          px={2}
          py={1}
          fontSize="xs"
        >
          {price}
        </Badge>
      </Flex>

      {/* Title and Description */}
      <Heading size="sm" mb={2} lineClamp={1}>
        {t(titleKey)}
      </Heading>
      <Text fontSize="sm" color="gray.600" lineClamp={2} mb={3}>
        {t(descriptionKey)}
      </Text>

      {/* Footer: Location and Availability */}
      <HStack gap={4} fontSize="xs" color="gray.500">
        <HStack gap={1}>
          <Box as={FaMapMarkerAlt} />
          <Text lineClamp={1}>{t(`location.${locationKeyMap[locationId]}`)}</Text>
        </HStack>
        <HStack gap={1}>
          <Box as={FaClock} />
          <Text>{t(availabilityKey)}</Text>
        </HStack>
      </HStack>
    </Box>
  );
};

export default ServiceCard;
