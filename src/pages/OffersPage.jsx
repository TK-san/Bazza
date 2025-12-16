/**
 * OffersPage
 * Displays services being offered by providers (Chakra UI v3)
 */
import { useState, useMemo, useCallback } from 'react';
import { Box, VStack, Text, Heading, HStack, IconButton } from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import CategoryPill from '../components/common/CategoryPill';
import ServiceCard from '../components/common/ServiceCard';
import PullToRefresh from '../components/common/PullToRefresh';
import LocationFilter from '../components/common/LocationFilter';
import { categories, locations, mockOffers } from '../data/mockServices';
import usePullToRefresh from '../hooks/usePullToRefresh';
import { useFavoritesContext } from '../context/FavoritesContext';
import { useLanguage } from '../i18n';

const OffersPage = ({ initialCategory = 'all', onBack }) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeLocation, setActiveLocation] = useState('all');
  const [offers, setOffers] = useState(mockOffers);

  const { isFavorite, toggleFavorite } = useFavoritesContext();

  // Filter services based on selected category and location
  const filteredOffers = useMemo(() => {
    let result = offers;

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter((offer) => offer.category === activeCategory);
    }

    // Filter by location
    if (activeLocation !== 'all') {
      result = result.filter((offer) => offer.locationId === activeLocation);
    }

    return result;
  }, [activeCategory, activeLocation, offers]);

  // Refresh handler - simulates fetching new data
  const handleRefresh = useCallback(async () => {
    console.log('Refreshing offers...');
    setOffers([...mockOffers].sort(() => Math.random() - 0.5));
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
              {activeCategory !== 'all' ? t(`categories.${activeCategory}`) : t('offers.title')}
            </Heading>
          </HStack>
          <Text fontSize="sm" color="gray.500" ml={onBack ? 10 : 0}>
            {filteredOffers.length} {t('offers.services')}
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

        {/* Service Cards */}
        <VStack gap={0} pb={8}>
          {filteredOffers.map((offer) => (
            <Box key={offer.id} w="full">
              <ServiceCard
                service={offer}
                isFavorite={isFavorite('offers', offer.id)}
                onToggleFavorite={() => toggleFavorite('offers', offer.id)}
                onClick={() => console.log('View service:', offer.id)}
              />
            </Box>
          ))}
        </VStack>

        {/* Empty State */}
        {filteredOffers.length === 0 && (
          <Box textAlign="center" py={10} px={4}>
            <Text fontSize="lg" color="gray.400">
              {t('offers.noServices')}
            </Text>
            <Text fontSize="sm" color="gray.400">
              {t('offers.tryFilters')}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default OffersPage;
