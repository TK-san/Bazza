/**
 * RequestsPage
 * Displays requests from people seeking services (Chakra UI v3)
 */
import { useState, useMemo, useCallback } from 'react';
import { Box, VStack, Text, Heading, HStack, IconButton } from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import CategoryPill from '../components/common/CategoryPill';
import RequestCard from '../components/common/RequestCard';
import PullToRefresh from '../components/common/PullToRefresh';
import LocationFilter from '../components/common/LocationFilter';
import { categories, locations, mockRequests } from '../data/mockServices';
import usePullToRefresh from '../hooks/usePullToRefresh';
import { useFavoritesContext } from '../context/FavoritesContext';
import { useLanguage } from '../i18n';

const RequestsPage = ({ initialCategory = 'all', onBack }) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeLocation, setActiveLocation] = useState('all');
  const [requests, setRequests] = useState(mockRequests);

  const { isFavorite, toggleFavorite } = useFavoritesContext();

  // Filter requests based on selected category and location
  const filteredRequests = useMemo(() => {
    let result = requests;

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter((request) => request.category === activeCategory);
    }

    // Filter by location
    if (activeLocation !== 'all') {
      result = result.filter((request) => request.locationId === activeLocation);
    }

    return result;
  }, [activeCategory, activeLocation, requests]);

  // Refresh handler - simulates fetching new data
  const handleRefresh = useCallback(async () => {
    console.log('Refreshing requests...');
    setRequests([...mockRequests].sort(() => Math.random() - 0.5));
  }, []);

  // Pull-to-refresh hook
  const {
    containerRef,
    pullDistance,
    isRefreshing,
    progress,
    handlers: pullHandlers,
  } = usePullToRefresh(handleRefresh);

  // Handle category change
  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
  };

  // Handle location change
  const handleLocationChange = (locId) => {
    setActiveLocation(locId);
  };

  return (
    <Box
      ref={containerRef}
      h="calc(100vh - 140px)"
      overflowY="auto"
      position="relative"
      {...pullHandlers}
    >
      {/* Pull-to-Refresh Indicator */}
      <PullToRefresh
        pullDistance={pullDistance}
        isRefreshing={isRefreshing}
        progress={progress}
      />

      {/* Content with offset when pulling */}
      <Box
        transform={`translateY(${pullDistance}px)`}
        transition={!isRefreshing && pullDistance === 0 ? 'transform 0.3s ease' : 'none'}
      >
        {/* Section Header */}
        <Box px={4} pt={4} pb={2}>
          <HStack gap={2} mb={1}>
            {onBack && (
              <IconButton
                aria-label="Go back"
                variant="ghost"
                size="sm"
                borderRadius="full"
                onClick={onBack}
              >
                <FaArrowLeft />
              </IconButton>
            )}
            <Heading size="md" color="gray.800">
              {activeCategory !== 'all' ? t(`categories.${activeCategory}`) : t('requests.title')}
            </Heading>
          </HStack>
          <Text fontSize="sm" color="gray.500" ml={onBack ? 10 : 0}>
            {filteredRequests.length} {t('requests.requestsCount')}
          </Text>
        </Box>

        {/* Location Filter */}
        <LocationFilter
          locations={locations}
          activeLocation={activeLocation}
          onSelect={handleLocationChange}
        />

        {/* Category Filter */}
        <CategoryPill
          categories={categories}
          activeCategory={activeCategory}
          onSelect={handleCategoryChange}
        />

        {/* Request Cards */}
        <VStack gap={0} pb={8}>
          {filteredRequests.map((request) => (
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

        {/* Empty State */}
        {filteredRequests.length === 0 && (
          <Box textAlign="center" py={10} px={4}>
            <Text fontSize="lg" color="gray.400">
              {t('requests.noRequests')}
            </Text>
            <Text fontSize="sm" color="gray.400">
              {t('requests.tryFilters')}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default RequestsPage;
