/**
 * RequestCard Component
 * Displays a service request in card format (Chakra UI v3)
 */
import { Box, Heading, Text, HStack, VStack, Badge, Flex, IconButton } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaCalendarAlt, FaExclamationCircle, FaHeart, FaRegHeart, FaThLarge, FaBroom, FaCar, FaWrench, FaBook, FaUtensils, FaLaptop, FaBox, FaSpa, FaRoute, FaClock } from 'react-icons/fa';
import { useLanguage } from '../../i18n';

// Format posted time to human readable
const formatPostedTime = (minutes, t) => {
  if (minutes < 5) {
    return t('cards.justNow');
  }
  if (minutes < 60) {
    return `${minutes} ${t('cards.minutes')} ${t('cards.postedAgo')}`;
  }
  if (minutes < 1440) {
    const hours = Math.floor(minutes / 60);
    return `${hours} ${t('cards.hours')} ${t('cards.postedAgo')}`;
  }
  const days = Math.floor(minutes / 1440);
  return `${days}d ${t('cards.postedAgo')}`;
};

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

const RequestCard = ({ request, onClick, isFavorite, onToggleFavorite }) => {
  const { t } = useLanguage();
  const { titleKey, descriptionKey, budget, requester, locationId, dateNeededKey, dateNeeded, urgency, category, distance, postedMinutesAgo } = request;

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
      borderLeft={urgency === 'urgent' ? '4px solid' : 'none'}
      borderLeftColor="red.400"
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

      {/* Header: Category Icon, Requester and Budget */}
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
            <Text fontWeight="semibold" fontSize="sm">{requester.name}</Text>
            <Text fontSize="xs" color="gray.500">{t('cards.lookingForHelp')}</Text>
          </VStack>
        </HStack>
        <VStack align="end" gap={1}>
          <Badge
            colorPalette="orange"
            borderRadius="full"
            px={2}
            py={1}
            fontSize="xs"
          >
            {budget}
          </Badge>
          {urgency === 'urgent' && (
            <HStack gap={1} color="red.500">
              <Box as={FaExclamationCircle} boxSize={3} />
              <Text fontSize="xs" fontWeight="bold">{t('cards.urgent')}</Text>
            </HStack>
          )}
        </VStack>
      </Flex>

      {/* Title and Description */}
      <Heading size="sm" mb={2} lineClamp={1}>
        {t(titleKey)}
      </Heading>
      <Text fontSize="sm" color="gray.600" lineClamp={2} mb={3}>
        {t(descriptionKey)}
      </Text>

      {/* Footer: Location, Distance, Posted Time, and Date */}
      <HStack gap={3} fontSize="xs" color="gray.500" flexWrap="wrap">
        <HStack gap={1}>
          <Box as={FaMapMarkerAlt} />
          <Text lineClamp={1}>{t(`location.${locationKeyMap[locationId]}`)}</Text>
        </HStack>
        {distance && (
          <HStack gap={1} color="blue.500">
            <Box as={FaRoute} />
            <Text fontWeight="medium">{distance} {t('cards.kmAway')}</Text>
          </HStack>
        )}
        {postedMinutesAgo !== undefined && (
          <HStack gap={1} color="orange.500">
            <Box as={FaClock} />
            <Text fontWeight="medium">{formatPostedTime(postedMinutesAgo, t)}</Text>
          </HStack>
        )}
      </HStack>
    </Box>
  );
};

export default RequestCard;
