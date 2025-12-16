/**
 * FavoritesPage
 * Displays user's saved offers and requests
 */
import { useState, useMemo } from 'react';
import { Box, VStack, Text, Heading, HStack, Button } from '@chakra-ui/react';
import { FaArrowLeft, FaHeart } from 'react-icons/fa';
import ServiceCard from '../components/common/ServiceCard';
import RequestCard from '../components/common/RequestCard';
import { useFavoritesContext } from '../context/FavoritesContext';
import { mockOffers, mockRequests } from '../data/mockServices';
import { useLanguage } from '../i18n';

const FavoritesPage = ({ onBack }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('offers'); // 'offers' | 'requests'
  const { favorites, isFavorite, toggleFavorite, getFavoriteCount } = useFavoritesContext();

  // Get favorited items
  const favoriteOffers = useMemo(() => {
    return mockOffers.filter(offer => favorites.offers.includes(offer.id));
  }, [favorites.offers]);

  const favoriteRequests = useMemo(() => {
    return mockRequests.filter(request => favorites.requests.includes(request.id));
  }, [favorites.requests]);

  const offersCount = getFavoriteCount('offers');
  const requestsCount = getFavoriteCount('requests');

  return (
    <Box minH="100vh" bg="gray.50">
      {/* Header */}
      <Box
        bg="white"
        px={4}
        py={3}
        borderBottom="1px solid"
        borderColor="gray.100"
        position="sticky"
        top={0}
        zIndex={50}
      >
        <HStack gap={3}>
          <Button
            variant="ghost"
            p={0}
            minW="auto"
            h="auto"
            color="gray.600"
            onClick={onBack}
          >
            <Box as={FaArrowLeft} boxSize={5} />
          </Button>
          <Box>
            <Heading size="md" color="gray.800">
              {t('favorites.title')}
            </Heading>
            <Text fontSize="xs" color="gray.500">
              {offersCount + requestsCount} {t('favorites.savedItems')}
            </Text>
          </Box>
        </HStack>
      </Box>

      {/* Tab Switcher */}
      <HStack gap={0} px={4} pt={4} pb={2}>
        <Button
          flex={1}
          h="44px"
          bg={activeTab === 'offers' ? 'blue.500' : 'white'}
          color={activeTab === 'offers' ? 'white' : 'gray.600'}
          borderRadius="lg"
          borderRightRadius={0}
          boxShadow="sm"
          _hover={{ bg: activeTab === 'offers' ? 'blue.600' : 'gray.50' }}
          onClick={() => setActiveTab('offers')}
        >
          {t('favorites.services')} ({offersCount})
        </Button>
        <Button
          flex={1}
          h="44px"
          bg={activeTab === 'requests' ? 'orange.500' : 'white'}
          color={activeTab === 'requests' ? 'white' : 'gray.600'}
          borderRadius="lg"
          borderLeftRadius={0}
          boxShadow="sm"
          _hover={{ bg: activeTab === 'requests' ? 'orange.600' : 'gray.50' }}
          onClick={() => setActiveTab('requests')}
        >
          {t('favorites.requests')} ({requestsCount})
        </Button>
      </HStack>

      {/* Content */}
      <Box py={4}>
        {activeTab === 'offers' ? (
          favoriteOffers.length > 0 ? (
            <VStack gap={0}>
              {favoriteOffers.map((offer) => (
                <Box key={offer.id} w="full">
                  <ServiceCard
                    service={offer}
                    isFavorite={isFavorite('offers', offer.id)}
                    onToggleFavorite={() => toggleFavorite('offers', offer.id)}
                    onClick={() => console.log('View offer:', offer.id)}
                  />
                </Box>
              ))}
            </VStack>
          ) : (
            <EmptyState type="offers" t={t} />
          )
        ) : (
          favoriteRequests.length > 0 ? (
            <VStack gap={0}>
              {favoriteRequests.map((request) => (
                <Box key={request.id} w="full">
                  <RequestCard
                    request={request}
                    isFavorite={isFavorite('requests', request.id)}
                    onToggleFavorite={() => toggleFavorite('requests', request.id)}
                    onClick={() => console.log('View request:', request.id)}
                  />
                </Box>
              ))}
            </VStack>
          ) : (
            <EmptyState type="requests" t={t} />
          )
        )}
      </Box>
    </Box>
  );
};

// Empty state component
const EmptyState = ({ type, t }) => (
  <VStack gap={3} py={16} px={8} textAlign="center">
    <Box
      w="80px"
      h="80px"
      borderRadius="full"
      bg="gray.100"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box as={FaHeart} boxSize={8} color="gray.300" />
    </Box>
    <Heading size="sm" color="gray.600">
      {type === 'offers' ? t('favorites.noSavedOffers') : t('favorites.noSavedRequests')}
    </Heading>
    <Text fontSize="sm" color="gray.400">
      {t('favorites.tapToSave')} {type === 'offers' ? t('favorites.service') : t('favorites.request')} {t('favorites.toSaveHere')}
    </Text>
  </VStack>
);

export default FavoritesPage;
